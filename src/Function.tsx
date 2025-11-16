import { useState } from "react";

export function Toggle() {
  const [drop, setDrop] = useState(false);

  return { drop, setDrop };
}
