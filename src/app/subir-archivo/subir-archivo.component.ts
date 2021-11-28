import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  imagenPrevia: any;
  files: any = []
  loading: boolean;

  ngOnInit(): void {
  }

  public onFileSelected(event: any) {

    const imagen = event.target.files[0];
    console.log(imagen);
    if (['image'].includes(imagen.type)) {
      console.log('Si es una imagen');
      this.files.push(imagen)
      this.blobFile(imagen).then((res: any) => {
        this.imagenPrevia = res.base;

      })
    } else {
      console.log('No es imagen');

    }
  }

  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })
}
