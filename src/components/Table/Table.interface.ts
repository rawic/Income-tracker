export default interface TableCompositionI {
  Header: React.FC<{ children: React.ReactNode }>,
  Heading: React.FC<{ children?: string }>,
  Body: React.FC<{ children: React.ReactNode }>,
}