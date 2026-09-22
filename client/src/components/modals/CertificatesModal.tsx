import { useState } from "react";

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  verifyUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Fundamental AI Concepts",
    issuer: "Microsoft",
    date: "December 10, 2024",
    image: "/attached_assets/photo_1_2025-06-30_14-49-41.jpg",
    credentialId: "MS-AI-2024"
  },
  {
    id: 2,
    title: "Fundamentals of Machine Learning",
    issuer: "Microsoft",
    date: "December 10, 2024",
    image: "/attached_assets/photo_2_2025-06-30_14-49-41.jpg",
    credentialId: "MS-ML-2024"
  },
  {
    id: 3,
    title: "Oracle Cloud Data Management 2023 Certified Foundations Associate",
    issuer: "Oracle",
    date: "August 27, 2023",
    image: "/attached_assets/photo_7_2025-06-20_16-41-07.jpg",
    credentialId: "ORACLE-2023"
  },
  {
    id: 4,
    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuer: "Oracle",
    date: "July 22, 2023",
    image: "/attached_assets/photo_9_2025-06-20_16-41-07.jpg",
    credentialId: "ORACLE-INFRA-2023"
  },
  {
    id: 5,
    title: "Hack Beyond Limits (24-hour Hackathon)",
    issuer: "Rathinam College of Arts and Science",
    date: "February 22-23, 2025",
    image: "/attached_assets/photo_12_2025-06-20_16-41-07.jpg",
    credentialId: "HBL-2025"
  },
  {
    id: 6,
    title: "LeadPro Infotech UX/UI Workshop",
    issuer: "LeadPro Infotech",
    date: "2024",
    image: "/attached_assets/photo_13_2025-06-20_16-41-07.jpg",
    credentialId: "LEADPRO-2024"
  },
  {
    id: 7,
    title: "Hack with Google Developer Group – Finalist",
    issuer: "Google Developer Group",
    date: "2024",
    image: "/attached_assets/photo_14_2025-06-20_16-41-07.jpg",
    credentialId: "GDG-HACK-2024"
  },
  {
    id: 8,
    title: "Beyond Abstraction - A Router Protocol & Pivot Hacker House",
    issuer: "Router Protocol & Pivot",
    date: "2024",
    image: "/attached_assets/photo_17_2025-06-20_16-41-07.jpg",
    credentialId: "ROUTER-PIVOT-2024"
  },
  {
    id: 9,
    title: "Hack knight'25 VIT Chennai",
    issuer: "VIT Chennai",
    date: "2025",
    image: "/attached_assets/photo_18_2025-06-20_16-41-07.jpg",
    credentialId: "VIT-HACK-2025"
  }
];

export default function CertificatesModal({ isOpen, onClose }: CertificatesModalProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/10 backdrop-blur-md text-white rounded-xl p-6 max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-certificate text-2xl text-blue-400"></i>
            <h2 className="text-2xl font-bold text-white">Certificates & Credentials</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        
        {!selectedCertificate ? (
          /* Certificates Grid */
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-muted rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{certificate.title}</h3>
                  <p className="text-primary font-medium mb-1">{certificate.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-3">{certificate.date}</p>
                  {certificate.credentialId && (
                    <p className="text-xs text-muted-foreground font-mono bg-muted-foreground/10 px-2 py-1 rounded">
                      ID: {certificate.credentialId}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Certificate Detail View */
          <div>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Certificates
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{selectedCertificate.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-building text-primary"></i>
                    <span className="text-muted-foreground">Issued by:</span>
                    <span className="font-medium">{selectedCertificate.issuer}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <i className="fas fa-calendar text-primary"></i>
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">{selectedCertificate.date}</span>
                  </div>
                  
                  {selectedCertificate.credentialId && (
                    <div className="flex items-center gap-3">
                      <i className="fas fa-id-card text-primary"></i>
                      <span className="text-muted-foreground">Credential ID:</span>
                      <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
                        {selectedCertificate.credentialId}
                      </span>
                    </div>
                  )}
                </div>
                
                {selectedCertificate.verifyUrl && (
                  <a
                    href={selectedCertificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
