import { Component } from '@angular/core';

@Component({
  selector: 'app-benevolat',
  templateUrl: './benevolat.component.html',
  styleUrls: ['./benevolat.component.scss'],
})
export class BenevolatComponent {
  list_benevolats: any[] = [
    {
      id: 1,
      title: 'زكاة الفطر',
      image: 'assets/imgs/zakat.jpg',
      description:
        'إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال.',
    },
    {
      id: 2,
      title: 'التبرع بلباس العيد',
      image: 'assets/imgs/lebsa.webp',
      description:
        'إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال.',
    },
    {
      id: 3,
      title: 'كفارة العاجز عن الصيام',
      image: 'assets/imgs/التبرع.jpg',
      description:
        'إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال.',
    },
  ];
}
