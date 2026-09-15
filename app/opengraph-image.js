import { ImageResponse } from "next/og";

export const alt = "Oramusa — Websites, software, and AI for real businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"linear-gradient(135deg,#111110 0%,#1d1b16 72%,#3d321d 100%)",color:"#f5f1e8",padding:"72px 80px"}}>
      <div style={{display:"flex",alignItems:"baseline",fontFamily:"Georgia",fontSize:58,fontWeight:700,letterSpacing:-2}}>Oram<span style={{color:"#f0cb73",fontStyle:"italic"}}>usa</span></div>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{fontSize:22,letterSpacing:7,color:"#b8b1a4",marginBottom:30}}>WEBSITES · SOFTWARE · AI</div>
        <div style={{display:"flex",flexDirection:"column",fontFamily:"Georgia",fontSize:82,lineHeight:1.02,fontWeight:700,letterSpacing:-3}}><div style={{display:"flex"}}>Built for the&nbsp;<span style={{color:"#f0cb73",fontStyle:"italic"}}>real world,</span></div><div style={{display:"flex"}}>not the demo.</div></div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:22,color:"#c9c2b7"}}><span>Professional websites · $0 upfront</span><span>oramusa.com</span></div>
    </div>,
    size
  );
}
