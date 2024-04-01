import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectNameService {
  projectName: String = "";
  constructor() { }
}
