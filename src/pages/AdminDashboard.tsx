import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  Loader2, LogOut, Users, Mail, Rocket, 
  Search, Download, Handshake, RefreshCw 
} from 'lucide-react';
import type { User, Session } from '@supabase/supabase-js';

type PartnerSubmission = {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  user_role: string;
  organization_name: string | null;
  areas_of_interest: string[];
  interested_domains: string[];
  message: string | null;
  status: string;
  created_at: string;
};

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  created_at: string;
};

type EarlyAccessSubmission = {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  user_role: string;
  college_organization: string | null;
  city: string | null;
  reason: string | null;
  interested_features: string[];
  status: string;
  created_at: string;
};

const statusColors: Record<string, string> = {
  new: 'bg-sky text-white',
  contacted: 'bg-secondary text-secondary-foreground',
  'in discussion': 'bg-accent text-accent-foreground',
  closed: 'bg-muted text-muted-foreground',
};

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [partnerData, setPartnerData] = useState<PartnerSubmission[]>([]);
  const [contactData, setContactData] = useState<ContactSubmission[]>([]);
  const [earlyAccessData, setEarlyAccessData] = useState<EarlyAccessSubmission[]>([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setTimeout(() => checkAdminRole(session.user.id), 0);
      } else {
        setIsLoading(false);
        navigate('/admin/login');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setIsLoading(false);
        navigate('/admin/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();

    if (error || !data) {
      toast.error('Access denied. Admin privileges required.');
      await supabase.auth.signOut();
      navigate('/admin/login');
      return;
    }

    setIsAdmin(true);
    setIsLoading(false);
    fetchAllData();
  };

  const fetchAllData = async () => {
    const [partners, contacts, earlyAccess] = await Promise.all([
      supabase.from('partner_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('early_access_submissions').select('*').order('created_at', { ascending: false }),
    ]);

    if (partners.data) setPartnerData(partners.data);
    if (contacts.data) setContactData(contacts.data);
    if (earlyAccess.data) setEarlyAccessData(earlyAccess.data);
  };

  const updateStatus = async (table: string, id: string, status: string) => {
    const { error } = await supabase
      .from(table)
      .update({ status })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update status');
      return;
    }

    toast.success('Status updated');
    fetchAllData();
  };

  const exportToCSV = (data: unknown[], filename: string) => {
    if (data.length === 0) {
      toast.error('No data to export');
      return;
    }

    const headers = Object.keys(data[0] as Record<string, unknown>);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = (row as Record<string, unknown>)[header];
          if (Array.isArray(value)) return `"${value.join('; ')}"`;
          if (typeof value === 'string' && value.includes(',')) return `"${value}"`;
          return value ?? '';
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const filterByStatus = <T extends { status: string }>(data: T[]) => {
    return data.filter(item => {
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesStatus;
    });
  };

  const filterPartners = () => {
    return filterByStatus(partnerData).filter(item => 
      searchTerm === '' || 
      item.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.organization_name?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    );
  };

  const filterContacts = () => {
    return filterByStatus(contactData).filter(item =>
      searchTerm === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterEarlyAccess = () => {
    return filterByStatus(earlyAccessData).filter(item =>
      searchTerm === '' ||
      item.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.college_organization?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    );
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const filteredPartners = filterPartners();
  const filteredContacts = filterContacts();
  const filteredEarlyAccess = filterEarlyAccess();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">af</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{partnerData.length}</p>
                <p className="text-sm text-muted-foreground">Partner Requests</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{contactData.length}</p>
                <p className="text-sm text-muted-foreground">Contact Messages</p>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-sky" />
              </div>
              <div>
                <p className="text-2xl font-bold">{earlyAccessData.length}</p>
                <p className="text-sm text-muted-foreground">Early Access Signups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="in discussion">In Discussion</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={fetchAllData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="partners" className="space-y-4">
          <TabsList className="grid w-full sm:w-auto sm:inline-grid grid-cols-3 gap-2">
            <TabsTrigger value="partners" className="gap-2">
              <Handshake className="w-4 h-4" />
              Partners ({filteredPartners.length})
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <Mail className="w-4 h-4" />
              Contacts ({filteredContacts.length})
            </TabsTrigger>
            <TabsTrigger value="early-access" className="gap-2">
              <Rocket className="w-4 h-4" />
              Early Access ({filteredEarlyAccess.length})
            </TabsTrigger>
          </TabsList>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-4">
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => exportToCSV(filteredPartners, 'partner-submissions')}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Interests</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPartners.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                          No partner submissions yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPartners.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.full_name}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{item.email}</div>
                              <div className="text-muted-foreground">{item.phone_number}</div>
                            </div>
                          </TableCell>
                          <TableCell>{item.user_role}</TableCell>
                          <TableCell>{item.organization_name || '-'}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {item.areas_of_interest.slice(0, 2).map((interest) => (
                                <Badge key={interest} variant="secondary" className="text-xs">
                                  {interest}
                                </Badge>
                              ))}
                              {item.areas_of_interest.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{item.areas_of_interest.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={item.status}
                              onValueChange={(value) => updateStatus('partner_submissions', item.id, value)}
                            >
                              <SelectTrigger className="w-[130px]">
                                <Badge className={statusColors[item.status] || 'bg-muted'}>
                                  {item.status}
                                </Badge>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="in discussion">In Discussion</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {formatDate(item.created_at)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-4">
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => exportToCSV(filteredContacts, 'contact-submissions')}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No contact messages yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredContacts.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.phone || '-'}</TableCell>
                          <TableCell className="max-w-[300px] truncate">{item.message}</TableCell>
                          <TableCell>
                            <Select
                              value={item.status}
                              onValueChange={(value) => updateStatus('contact_submissions', item.id, value)}
                            >
                              <SelectTrigger className="w-[130px]">
                                <Badge className={statusColors[item.status] || 'bg-muted'}>
                                  {item.status}
                                </Badge>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {formatDate(item.created_at)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          {/* Early Access Tab */}
          <TabsContent value="early-access" className="space-y-4">
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => exportToCSV(filteredEarlyAccess, 'early-access-submissions')}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>College</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Features</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEarlyAccess.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                          No early access signups yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredEarlyAccess.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.full_name}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{item.email}</div>
                              <div className="text-muted-foreground">{item.phone_number}</div>
                            </div>
                          </TableCell>
                          <TableCell>{item.user_role}</TableCell>
                          <TableCell>{item.college_organization || '-'}</TableCell>
                          <TableCell>{item.city || '-'}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {item.interested_features.slice(0, 2).map((feature) => (
                                <Badge key={feature} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {item.interested_features.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{item.interested_features.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={item.status}
                              onValueChange={(value) => updateStatus('early_access_submissions', item.id, value)}
                            >
                              <SelectTrigger className="w-[130px]">
                                <Badge className={statusColors[item.status] || 'bg-muted'}>
                                  {item.status}
                                </Badge>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {formatDate(item.created_at)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
