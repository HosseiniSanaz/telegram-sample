interface ChildStatus {
  status: boolean;
  index: number;
}
export default interface CardChildren {
  header: ChildStatus;
  content: ChildStatus;
  footer: ChildStatus;
}
