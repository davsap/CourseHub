import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cours } from '../../../../../model/cours';
import { CoursService } from '../../../../../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursform',
  templateUrl: './coursform.component.html',
  styleUrls: ['./coursform.component.css']
})
export class CoursFormComponent implements OnInit {
   coursForm = this.fb.group({
    titre: [null , [Validators.required, Validators.minLength(1)]],
    description: [null , [Validators.required, Validators.minLength(1)]],
      contenuCours: [null , [Validators.required]],
      coursvideo: [null , [Validators.required]]
    });
cours: Cours;
isUpdate: Boolean = false;

  constructor(private fb: FormBuilder, private service: CoursService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id: any =  this.route.snapshot.paramMap.get('idc');
    if (id != null) {
// formationupdate/:id/sujet/:ids/cours/:idc
        const idf: any = this.route.snapshot.paramMap.get('id');
        const ids: any = this.route.snapshot.paramMap.get('id');
       this.service.getCoursV2(idf, ids, id).subscribe((value: Cours) => { this.cours = value;
        this.isUpdate = true;
       this.coursForm.controls['titre'].setValue(this.cours.titre);
       this.coursForm.controls['description'].setValue(this.cours.description);
       this.coursForm.controls['contenuCours'].setValue(this.cours.contenu);
       });
    }
  }

  onSubmit() {

      // TODO: Use EventEmitter with form value
      console.log('Formulaire soumis : ' + this.coursForm.value);
      const idf = +this.route.snapshot.paramMap.get('id');
      const ids = +this.route.snapshot.paramMap.get('ids');
      let pathFile: String;
      pathFile = this.coursForm.get('coursvideo').value;
      pathFile = '/assets/videos/' +  pathFile.substring(pathFile.lastIndexOf('\\') + 1, pathFile.length);
/*       test.lastIndexOf('\\');
       console.log('helooooodsdash  : ' +);
 */      this.cours = new Cours(null,
      this.coursForm.get('titre').value,
      this.coursForm.get('description').value,
      this.coursForm.get('contenuCours').value,
      pathFile.toString());
      console.log('Formulaire soumis : ' + this.cours.contenu);
      this.service.addCoursV2(this.cours, idf, ids);
  }

}
