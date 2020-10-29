export default interface TableCompositionI {
  Header: React.FC<{ children: string }>,
  Heading: React.FC<{ children: string }>,
  Body: React.FC<{ children: string }>,
}