import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TranslationService } from './translation.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  langs: any = {};
  index: number = 0;
  changeLang: any = new BehaviorSubject<any>(0);
  langStatus$: any = this.changeLang.asObservable();

  subscription: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private translationService: TranslationService
  ) {}

  sendData(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  ngOnInit() {
    this.langs = this.translationService.langs;
    this.index = this.translationService.index;
    this.subscription.add(
      this.translationService.langStatus$.subscribe((res: any) => {
        this.index = res;
      })
    );
  }

  getStatisticInfo() {
    return [
      {
        title: [
          'დოკუმენტების გაუთავებელი ძიება',
          'Endless search for documents',
        ],
        logo: '../../assets/img/searchIcon.png',
      },
      {
        title: ['არაეფექტური გამოთხოვის პროცესი', 'Inefficient claim process'],
        logo: '../../assets/img/folder.png',
      },
      {
        title: [
          'დოკუმენტების გადაადგილების პრობლემები',
          'Errors related with document relocation',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'ინფორმაციის დაცულობის პრობლემები',
          'Information security issues',
        ],
        logo: '../../assets/img/profileIcon.png',
      },
      {
        title: ['კანონთან შესაბამისობის საკითხები', 'Legal Compliance Issues'],
        logo: '../../assets/img/policyIcon.png',
      },
      {
        title: [
          'დოკუმენტების მანუალური მენეჯნემტი',
          'Manual handling of paper documents',
        ],
        logo: '../../assets/img/managmentIcon.png',
      },
      {
        title: [
          'დოკუმენტების დაბრუნების პრობლემები',
          'Issues with document returns',
        ],
        logo: '../../assets/img/folder2.png',
      },
      {
        title: ['უშედეგო არაეფექტური  რეპორტინგი', 'Ineffective reporting'],
        logo: '../../assets/img/chartIcon.png',
      },
      {
        title: [
          'ინვენტარიზაციასთან დაკავშირებული პრობლემები',
          'Issues with inventory management',
        ],
        logo: '../../assets/img/searchIcon2.png',
      },
    ];
  }

  useCaseInfo() {
    return [
      {
        img: '../../assets/img/webapp2.png',
        title: ['სისტემა', 'System'],
        text: [
          'დიჯიტარიუსი ვებ-სისტემაა, მისი გამოყენებისთვის მხოლოდ ინტერნეტი დაგჭირდება',
          'Archivarius is a web system, you only need an internet connection to use it',
        ],
      },
      {
        img: '../../assets/img/adIntegration.png',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამას მარტივად დააკავშირებ კომპანიის Active Directory-სთან და მარტივად შეძლებ თანამშრომლების სისტემაში ჩართვას',
          "You can easily integrate the program with the company's already existing Active Directory and easily add all the employees to the system",
        ],
      },
      {
        img: '../../assets/img/mobileInterface.png',
        title: ['ინტერფეისი', 'Interface'],
        text: [
          'პროგრამას Desktop ვერსიასთან ერთად აქვს Mobile Interface-ი, რაც ლოჯისტიკის მენეჯერებს, კურიერებს და არქივის ოპერატორებს smartphone-ით მუშაობის შესაძლებლობას აძლევს',
          'Along with the desktop version, the program features a mobile interface, enabling logistics managers, couriers, and archive operators to work from their smartphones',
        ],
      },
      {
        img: '../../assets/img/devices03.png',
        title: ['გამოყენება', 'Usage'],
        text: [
          'დიჯიტარიუსთან მარტივად დააკავშირებ როგორც ლაზერულ, ისე ხელის სკანერს. ხოლო smartphone-ზე სამუშაოდ ტელეფონის კამერას გამოიყენებ',
          'Digitarius supports connections with both laser and handheld scanners, and for smartphone use, you can use the phone’s camera',
        ],
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: ['აღწერო დოკუმენტები', 'Digitally classify documents'],
        Desc: [
          'სისტემა აღრიცხავს დოკუმენტების ნომერს, ტიპს, თარიღსა და წარმოქმნის სერვის-ცენტრს',
          'System registers the document number, type, date and the service center where it came from.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse1.jpg',
      },
      {
        Title: ['მართო ლოჯისტიკა', 'Manage logistics'],
        Desc: [
          'დავალება ციფრულად ემაგრება კურიერს, მოდის არქივში წინასწარ გამზადებულ სივრცეში, მოწმდება და თავსდება არქივის შესაბამის ლოკაციაზე - სრული პროცესი ციფრულად აისახება პროგრამაში',
          'Delivery task is digitally assigned to the courier, documents are transported to a designated archival space, verified, and properly filed. This entire workflow is documented within the program',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: ['დააორგანიზო აქრივი', 'Organize your Archive'],
        Desc: [
          'დიჯიტარიუსი აღწერს ფიზიკური არქივის ყველანაირ სპეციფიკაციას - თაროებს, დარბაზებს და ა.შ.  ხოლო თითოეული ყუთის უნიკალური შტრიხკოდი იძლევა ინფორმაციას არქივში მისი ლოკაციის შესახებ',
          'Digitarius details all aspects of the physical archive, such as shelves and halls. Each box’s unique barcode provides its specific location within the archive.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: ['გაიმარტივო ინვენტარიზაცია', 'Simplify inventory'],
        Desc: [
          'სისტემურად ფიქსირდება თითოეული ინვენტარიზაციის დეტალები და თარიღი',
          'The details and date of each inventory are systematically recorded',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo3.svg',
        imgColor: '#FFCD00',
        picUrl: '../../assets/img/collapse3.jpg',
      },
      {
        Title: ['სწრაფად მოიძიო დოკუმეტები', 'Find documents quickly'],
        Desc: [
          'სისტემურად შესაძლებელია მოიძებნოს თითოეული ყუთი, პაკეტი და მასში შემავალი დოკუმენტები. ასევე, ინფორმაცია თუ როდის შემოვიდა არქივში ესა თუ ის დოკუმენტი',
          'Each box, package, and document can be searched within the system, which also tracks when each item was added to the archive',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo4.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse4.jpg',
      },
      {
        Title: ['მართო როლები და უფლებები', 'Manage roles and rights'],
        Desc: [
          'დიჯიტარიუსი სრულად მოერგება შენი ორგანიზაციის სტრუქტურას - სისტემაში შესაძლებელია ნებისმიერი ტიპის როლის დამატება და მისთვის შესაბამისი უფლებებისა და შეზღუდვების მინიჭება',
          'Digitarius fully adapts to your organization’s structure, allowing you to add any role and assign specific rights and restrictions accordingly',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/law.png',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
