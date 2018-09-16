import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SujetService } from '../../../../services/sujet.service';
import { ActivatedRoute } from '@angular/router';
import { Sujet } from '../../../../model/sujet';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.css']
})
export class SujetFormComponent implements OnInit {

  sujetForm = this.fb.group({
    titre: ['']
  });
  constructor(private fb: FormBuilder, private service: SujetService, private route: ActivatedRoute) { }
sujet: Sujet;
  ngOnInit() {
    const sujetId: any =  this.route.snapshot.paramMap.get('ids');
    if (sujetId != null) {
      // formationupdate/:id/sujet/:ids/cours/:idc
              const id: any = this.route.snapshot.paramMap.get('id');
             this.service.getSujet( id, sujetId).subscribe((value: Sujet) => { this.sujet = value;
             this.sujetForm.controls['titre'].setValue(this.sujet.titre);
             });
  }
}

  onSubmit() {
    console.warn(this.sujetForm.value);
    this.sujet = new Sujet(null, this.sujetForm.get('titre').value);
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.addSujet(this.sujet, id);
  }

}
