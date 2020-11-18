import { Component, OnInit } from '@angular/core';
import { Candidate } from '../services/candidate.model';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  constructor(public service: CandidateService) { }

  ngOnInit(): void {
    this.service.updateCandidatesList();
  }

  onRowClick(candidate: Candidate) {
    this.service.formData = Object.assign({}, candidate);
    this.service.editingData = true;
  }
}
