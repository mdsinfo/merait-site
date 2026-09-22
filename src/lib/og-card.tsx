export function OgCard({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101828",
        color: "#ffffff",
        padding: "64px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, fontWeight: 700 }}>MERAIT</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", color: "#22D3EE", fontSize: 24 }}>{kicker}</div>
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.1, marginTop: 16 }}>{title}</div>
      </div>
      <div style={{ display: "flex", width: 220, height: 8, background: "#7BEA23" }} />
    </div>
  );
}
