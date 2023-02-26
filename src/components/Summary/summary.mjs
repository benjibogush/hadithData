
import React from 'react';
import './summary.css';

function Summary() {
  return (
    <main className="summary-container">
      <div className="summary-card">
        <h1 className="card-title">Summary of Islam</h1>
        <div className="card-body">
          <p className="card-text">Islam is a monotheistic religion that teaches the belief in one God, the belief in the prophets of God, the belief in the holy book (the Quran), and the belief in the Day of Judgment. It has five pillars of faith, which are the declaration of faith (shahada), prayer (salah), fasting (sawm), giving to charity (zakat), and pilgrimage to Mecca (hajj).</p>
          <p className="card-text">Islam also emphasizes the importance of good deeds, the concept of accountability for one's actions in this life, and the achievement of salvation through submission to the will of God. It teaches that other religions have been corrupted over time, and that the original message of God has been lost or distorted.</p>
          <p className="card-text">In summary, Islam is a religion of peace, love and compassion, which calls for its followers to live a righteous life and strive for salvation through submission to the will of God.</p>
        </div>
        <div className="card-footer">
          <p className="card-text">Reference:</p>
          <ul className="card-text">
            <li>Esposito, John L. The Oxford Dictionary of Islam. Oxford University Press, 2003.</li>
            <li>Khan, M. A. Introduction to Islam. Routledge, 2006.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Summary;



/*
import React from 'react';

function Summary() {
  return (
  <main className="container" >
    
      <h1 className="text-center mb-4">Summary of Islam</h1>
     
      
      <p className="text-center mb-3">Islam is a monotheistic religion that teaches the belief in one God, the belief in the prophets of God, the belief in the holy book (the Quran), and the belief in the Day of Judgment. It has five pillars of faith, which are the declaration of faith (shahada), prayer (salah), fasting (sawm), giving to charity (zakat), and pilgrimage to Mecca (hajj).</p>
      <p className="mb-1">Islam also emphasizes the importance of good deeds, the concept of accountability for one's actions in this life, and the achievement of salvation through submission to the will of God. It teaches that other religions have been corrupted over time, and that the original message of God has been lost or distorted.</p>
      <p className="mb-1">In summary, Islam is a religion of peace, love and compassion, which calls for its followers to live a righteous life and strive for salvation through submission to the will of God.</p>
      
      
    
        <p>Reference:</p>
        <ul>
          <li>Esposito, John L. The Oxford Dictionary of Islam. Oxford University Press, 2003.</li>
          <li>Khan, M. A. Introduction to Islam. Routledge, 2006.</li>
        </ul>
      
    </main>
  );

}

export default Summary;

*/