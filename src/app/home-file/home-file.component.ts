import {Component, OnInit} from '@angular/core';
import {OcrService} from '../ocr.service';

@Component({
  selector: 'app-home-file',
  templateUrl: './home-file.component.html',
  styleUrls: ['./home-file.component.scss']
})
export class HomeFileComponent implements OnInit {
  listImages = [
    {
      src: 'Cita1.JPG'
    },
    {
      src: 'Cita2.jpg'
    },
    {
      src: 'Cita3.jpg'
    },
    {
      src: 'Cita4.jpg'
    }
  ];

  constructor(private ocrService: OcrService) {
  }

  ngOnInit(): void {
  }

  clickImage = (image) => {
    this.ocrService.cbImage.emit(image);
  };

  /* clickButton = (sanitizer) => {
    this.ocrService.cbButton.emit(sanitizer);
  } */
}
