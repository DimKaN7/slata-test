import { Injectable } from '@angular/core';
import { Candidate } from './candidate.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  formData: Candidate;
  editingData: boolean = false;
  candidatesList: Candidate[];
  readonly baseURL = 'http://localhost:53412/api';

  constructor(private httpClient: HttpClient) { }

  postCandidate(formData: Candidate) {
    return this.httpClient.post(`${this.baseURL}/Candidates`, formData);
  }

  updateCandidate() {
    return this.httpClient.put(`${this.baseURL}/Candidates/${this.formData.Id}`, this.formData);
  }

  deleteCandidate() {
    return this.httpClient.delete(`${this.baseURL}/Candidates/${this.formData.Id}`);
  }

  updateCandidatesList() {
    this.httpClient.get(`${this.baseURL}/Candidates`).toPromise()
      .then((res) => {
        this.candidatesList = res as Candidate[];
      });
  }
}
