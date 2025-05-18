// material-purchase-approval/page.tsx
"use client";
import { useState } from 'react';
import styles from './perchase-requests.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface Request {
  id: string;
  material: string;
  quantity: string;
  requestedBy: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function ApprovalRequestsPage() {
  const [requests, setRequests] = useState<Request[]>([
    { id: 'REQ-1045', material: 'Engine Oil', quantity: '50L', requestedBy: 'TEC001', status: 'approved' },
    { id: 'REQ-1046', material: 'Oil Filter', quantity: '4', requestedBy: 'TEC002', status: 'rejected' },
    { id: 'REQ-1047', material: 'Hydraulic Fluid', quantity: '20L', requestedBy: 'TEC003', status: 'pending' }
  ]);

  const handleStatusChange = (id: string, newStatus: 'approved' | 'rejected') => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Image 
            src="/machnix-logo.png" 
            alt="MachniX Logo" 
            width={60} 
            height={60} 
            priority 
          />
        </div>
        <div className={styles.navbarRight}>
          <Link href="/dashboard">
            <button className={styles.iconBtn}>
              <Image src="/home-icon.png" alt="Home" width={32} height={32} />
            </button>
          </Link>
          <Link href="/profile">
            <button className={styles.iconBtn}>
              <Image src="/profile-icon.png" alt="Profile" width={32} height={32} />
            </button>
          </Link>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </nav>

      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <button className={styles.navButton}>Machinery Management</button>
            <button className={styles.navButton}>Service Notifications</button>
            <button className={styles.navButton}>Maintenance Scheduling</button>
            <button className={`${styles.navButton} ${styles.active}`}>Material Management</button>
            <button className={styles.navButton}>Service Logs</button>
            <button className={styles.navButton}>Historical Records</button>
          </nav>
          <button className={styles.backButton}>Back</button>
        </aside>

        {/* Main Content */}
        <main className={styles.contentArea}>
          <div className={styles.card}>
            <h1 className={styles.title}>Material Purchase Approval Requests</h1>
            
            {/* Search Filters */}
            <div className={styles.searchSection}>
              <div className={styles.searchFilters}>
                <input 
                  type="text" 
                  placeholder="Request ID" 
                  className={styles.searchInput} 
                />
                <input 
                  type="text" 
                  placeholder="Material Name" 
                  className={styles.searchInput} 
                />
                <input 
                  type="text" 
                  placeholder="Quantity" 
                  className={styles.searchInput} 
                />
                <input 
                  type="text" 
                  placeholder="Requested By" 
                  className={styles.searchInput} 
                />
                <select className={styles.statusFilter}>
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Approval Table */}
            <div className={styles.tableWrapper}>
              <table className={styles.approvalTable}>
                <thead>
                  <tr>
                    <th>Request ID</th>
                    <th>Material Name</th>
                    <th>Quantity</th>
                    <th>Requested By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.id}</td>
                      <td>{request.material}</td>
                      <td>{request.quantity}</td>
                      <td>{request.requestedBy}</td>
                      <td>
                        {request.status === 'pending' ? (
                          <div className={styles.actionButtons}>
                            <button 
                              className={styles.approveBtn}
                              onClick={() => handleStatusChange(request.id, 'approved')}
                            >
                              Approve
                            </button>
                            <button 
                              className={styles.rejectBtn}
                              onClick={() => handleStatusChange(request.id, 'rejected')}
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className={`${styles.statusLabel} ${
                            request.status === 'approved' ? styles.approved : styles.rejected
                          }`}>
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Confirmation Section */}
            <div className={styles.confirmationSection}>
              <button className={styles.backButton}>
                Back
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}