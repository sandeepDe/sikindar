export interface Task {
  requestId: number;
  taskDescription: string;
  production: string;
  productionId: string;
  project: string;
  talentName: string;
  priority: string;
  auditPeriod: string;
  request: Date;
  closed: Date;
}
