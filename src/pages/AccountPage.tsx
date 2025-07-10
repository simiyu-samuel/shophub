import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, ShoppingBag, Heart, LogOut, MapPin, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/UI/Button';
import { Order, Address } from '../types';
import { v4 as uuidv4 } from 'uuid';

const AccountPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [orders, setOrders] = useState<Order[]>([]);
  const { wishlist, removeFromWishlist } = useWishlist();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressForm, setAddressForm] = useState({ name: '', address: '', city: '', state: '', zipCode: '' });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const saved = localStorage.getItem('orders');
    if (saved) {
      setOrders(JSON.parse(saved));
    }
    const savedAddresses = localStorage.getItem('addresses');
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, []);

  if (!user) {
    navigate('/login');
    return null;
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress: Address = { id: uuidv4(), ...addressForm };
    const updated = [newAddress, ...addresses];
    setAddresses(updated);
    localStorage.setItem('addresses', JSON.stringify(updated));
    setShowAddressForm(false);
    setAddressForm({ name: '', address: '', city: '', state: '', zipCode: '' });
  };

  const handleRemoveAddress = (id: string) => {
    const updated = addresses.filter(a => a.id !== id);
    setAddresses(updated);
    localStorage.setItem('addresses', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-3 py-2 text-left rounded-md text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Profile Information</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value="John"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value="Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Order History</h3>
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No orders yet</p>
                      <Button className="mt-4" onClick={() => navigate('/products')}>
                        Start Shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map(order => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <div>
                              <span className="font-semibold text-gray-900">Order #{order.id.slice(0, 8)}</span>
                              <span className="ml-4 text-gray-500">{new Date(order.date).toLocaleString()}</span>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="text-sm px-2 py-1 rounded bg-blue-50 text-blue-700 mr-2">{order.status}</span>
                              <span className="font-semibold text-gray-900">${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className="mt-2">
                            <span className="font-medium text-gray-700">Shipping to:</span> {order.shipping.name}, {order.shipping.address}, {order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}
                          </div>
                          <div className="mt-4">
                            <span className="font-medium text-gray-700">Items:</span>
                            <ul className="mt-2 space-y-1">
                              {order.items.map(item => (
                                <li key={item.id} className="flex items-center space-x-2">
                                  <img src={item.product.image} alt={item.product.name} className="w-8 h-8 object-cover rounded" />
                                  <span>{item.product.name}</span>
                                  <span className="text-gray-500">x{item.quantity}</span>
                                  <span className="ml-auto font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Wishlist</h3>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No items in your wishlist</p>
                      <Button className="mt-4" onClick={() => navigate('/products')}>
                        Browse Products
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {wishlist.map(product => (
                        <div key={product.id} className="bg-gray-50 border rounded-lg p-4 flex flex-col">
                          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
                          <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                          <div className="flex-1 flex flex-col justify-between">
                            <span className="text-lg font-bold text-gray-900 mb-2">${product.price.toFixed(2)}</span>
                            <Button variant="outline" size="sm" onClick={() => removeFromWishlist(product.id)}>
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Shipping Addresses</h3>
                  {addresses.length === 0 && !showAddressForm ? (
                    <div className="text-center py-12">
                      <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No addresses saved</p>
                      <Button className="mt-4" onClick={() => setShowAddressForm(true)}>Add Address</Button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6 flex justify-end">
                        <Button onClick={() => setShowAddressForm(!showAddressForm)}>
                          {showAddressForm ? 'Cancel' : 'Add Address'}
                        </Button>
                      </div>
                      {showAddressForm && (
                        <form className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleAddAddress}>
                          <input name="name" value={addressForm.name} onChange={handleAddressFormChange} placeholder="Full Name" className="px-3 py-2 border rounded" required />
                          <input name="address" value={addressForm.address} onChange={handleAddressFormChange} placeholder="Address" className="px-3 py-2 border rounded" required />
                          <input name="city" value={addressForm.city} onChange={handleAddressFormChange} placeholder="City" className="px-3 py-2 border rounded" required />
                          <input name="state" value={addressForm.state} onChange={handleAddressFormChange} placeholder="State" className="px-3 py-2 border rounded" required />
                          <input name="zipCode" value={addressForm.zipCode} onChange={handleAddressFormChange} placeholder="ZIP Code" className="px-3 py-2 border rounded" required />
                          <Button type="submit" className="md:col-span-2">Save Address</Button>
                        </form>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {addresses.map(addr => (
                          <div key={addr.id} className="border rounded-lg p-4 flex flex-col">
                            <div className="mb-2 font-semibold text-gray-900">{addr.name}</div>
                            <div className="text-gray-700">{addr.address}</div>
                            <div className="text-gray-700">{addr.city}, {addr.state} {addr.zipCode}</div>
                            <Button variant="outline" size="sm" className="mt-4 self-end" onClick={() => handleRemoveAddress(addr.id)}>
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'payment' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Payment Methods</h3>
                  <div className="text-center py-12">
                    <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No payment methods saved</p>
                    <Button className="mt-4">Add Payment Method</Button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Account Settings</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Email Notifications</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Receive updates about your orders</p>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Marketing Emails</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Receive promotional offers and updates</p>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">SMS Notifications</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Receive order updates via SMS</p>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;