import { Group } from "@mantine/core";

export default function Qualification({ qualification }) {
  return (
    <Group position="center">
      <div className="qualification" style={{backgroundColor: "lightgreen"}}></div>
      <p style={{fontSize: "13px"}}>{qualification}</p>
    </Group>
  )
}