import villa from "@/assets/property-villa.jpg";
import plot from "@/assets/property-plot.jpg";
import commercial from "@/assets/property-commercial.jpg";
import industrial from "@/assets/property-industrial.jpg";
import farm from "@/assets/property-farm.jpg";

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  size: string;
  type: "Villa" | "Plot" | "Commercial" | "Industrial" | "Farm";
  image: string;
  highlight?: string;
};

export const PROPERTIES: Property[] = [
  { id: "p1", title: "Skyline Villa Estate", location: "Hosur – Bagalur Road", price: "₹ 3.85 Cr", size: "4,200 sqft", type: "Villa", image: villa, highlight: "Featured" },
  { id: "p2", title: "Greenwoods Premium Plots", location: "Rayakottai", price: "₹ 28 Lakh+", size: "1,200 – 2,400 sqft", type: "Plot", image: plot, highlight: "DTCP Approved" },
  { id: "p3", title: "Hosur Tech Tower", location: "SIPCOT Phase II", price: "On Request", size: "12,000 sqft", type: "Commercial", image: commercial },
  { id: "p4", title: "Industrial Hub Land", location: "Thally Road", price: "₹ 65 Lakh / Acre", size: "5 – 25 Acres", type: "Industrial", image: industrial, highlight: "STRR Belt" },
  { id: "p5", title: "Coconut Grove Farm", location: "Denkanikottai", price: "₹ 42 Lakh / Acre", size: "2 – 10 Acres", type: "Farm", image: farm },
  { id: "p6", title: "Lakeview Villa Plots", location: "Soolagiri", price: "₹ 34 Lakh+", size: "1,500 sqft", type: "Plot", image: plot, highlight: "Limited" },
];

export const SERVICES = [
  { title: "Residential Plots", desc: "DTCP & RERA approved gated layouts across Hosur." },
  { title: "Villas & Houses", desc: "Premium villas, independent houses and luxury homes." },
  { title: "Commercial Properties", desc: "Showrooms, offices, retail spaces on prime corridors." },
  { title: "Industrial Lands", desc: "SIPCOT, NA & CLU lands for manufacturing units." },
  { title: "Farm Lands", desc: "Coconut, mango groves & agri investment lands." },
  { title: "Rental & Lease", desc: "Long-term lease for warehousing, factories & retail." },
  { title: "Joint Venture Lands", desc: "JV opportunities with builders & developers." },
  { title: "Investment Consulting", desc: "Data-led advisory on Hosur growth corridors." },
  { title: "Construction Services", desc: "Turnkey construction with verified contractors." },
  { title: "Property Marketing", desc: "End-to-end marketing for landowners & builders." },
];

export const STATS = [
  { value: "22+", label: "Years of Trust" },
  { value: "1000+", label: "Properties Listed" },
  { value: "500+", label: "Happy Families" },
  { value: "100%", label: "Verified Listings" },
];

export const LOCATIONS = ["Hosur", "Bangalore", "Rayakottai", "Denkanikottai", "Thally", "Soolagiri", "Krishnagiri"];

export const CONTACT = {
  phones: ["+91 95003 91129", "+91 93620 08900"],
  email: "hosurallproperty.com2009@gmail.com",
  whatsapp: "919500391129",
  address: "Hosur, Tamil Nadu 635109, India",
};
