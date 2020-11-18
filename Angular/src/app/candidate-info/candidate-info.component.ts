import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.scss']
})
export class CandidateInfoComponent implements OnInit {

  constructor(public service: CandidateService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) form.resetForm();
    this.service.formData = {
      Id: 0,
      FullName: '',
      PhoneNumber: '',
      Position: '',
      TaskIssueDate: '',
      HiringEmployee: '',
      TimeLimitation: '',
      TaskCompleteDate: '',
      Mentor: '',
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.editingData) {
      this.service.updateCandidate().subscribe(
        () => {
          this.resetForm(form);
          this.service.updateCandidatesList();
          this.service.editingData = false;
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else {
      this.service.postCandidate(form.value).subscribe(
        () => {
          this.resetForm(form);
          this.service.updateCandidatesList();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onCancelClick(form: NgForm) {
    this.resetForm(form);
    this.service.editingData = false;
  }

  onDeleteClick(form: NgForm) {
    this.service.deleteCandidate().subscribe(
      () => {
        this.resetForm(form);
        this.service.editingData = false;
        this.service.updateCandidatesList();
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
