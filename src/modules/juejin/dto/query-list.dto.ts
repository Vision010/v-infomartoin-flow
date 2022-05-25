export class QueryListDto {
  id_type: number; // default 2
  client_type: number; // default 2608
  sort_type: number; // default 300
  cursor: string; // page hash, default 0
  limit: number; // page size
}
