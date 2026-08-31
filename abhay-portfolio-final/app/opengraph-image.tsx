import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#123d37",
          backgroundImage:
            "linear-gradient(#1c5148 1px, transparent 1px), linear-gradient(90deg, #1c5148 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "76px 84px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#aac1b4",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Abhay Pareek</span>
          <span>Data Analyst</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              color: "#f6f6f3",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.02,
              maxWidth: 920,
            }}
          >
            Turning data into actionable insights
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {["SQL", "Python", "Excel", "Power BI", "PostgreSQL"].map((tool) => (
              <div
                key={tool}
                style={{
                  display: "flex",
                  color: "#d8ed96",
                  border: "1px solid #3e635b",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
