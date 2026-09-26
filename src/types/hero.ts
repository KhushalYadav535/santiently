export type InventionMode = "ACOUSTIC" | "SPATIAL" | "QUANTUM";

export interface InventionMeta {
  id: InventionMode;
  code: string;
  name: string;
  category: string;
  tagline: string;
  activeColor: string;
  pillColor: string;
  desc: string;
  metrics: {
    label: string;
    value: string;
  }[];
}
