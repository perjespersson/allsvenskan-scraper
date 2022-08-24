import { Group } from "@mantine/core";

export default function Qualification({ qualification, color }) {
  return (
    <>
      <div className="qualification" style={{ backgroundColor: color }}></div>
      <p className="qualification-text">{qualification}</p>
    </>
  )
}