import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ExternalLink, TrendingUp, Wallet, Activity } from 'lucide-react';
import BalanceCard from '../components/BalanceCard';
import TransactionsTable from '../components/TransactionsTable';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Volume', value: '$124,583', change: '+12.5%', icon: TrendingUp },
    { label: 'Active Links', value: '18', change: '+3', icon: ExternalLink },
    { label: 'This Month', value: '$52,140', change: '+8.2%', icon: Activity },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back! Here's your payment overview.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/payment-links"
            className="px-4 sm:px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <Plus className="w-5 h-5" />
            <span>Create Payment Link</span>
          </Link>
          
          <Link
            to="/api-keys"
            className="px-4 sm:px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-teal-400 hover:text-white transition-all duration-300 backdrop-blur-sm text-center text-sm sm:text-base"
          >
            Generate API Key
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <BalanceCard />
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="p-4 sm:p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm text-green-400 font-medium">{stat.change}</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-1">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Transactions Table */}
      <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-white">Recent Transactions</h2>
          <Link to="/transactions" className="text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm sm:text-base">
            View All
          </Link>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Dashboard;