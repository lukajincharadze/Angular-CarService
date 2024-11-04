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
        title: ['მომსახურების გაწელილი პროცესი', 'Extended service process'],
        logo: '../../assets/img/searchIcon.png',
      },
      {
        title: [
          'ფრაგმენტირებული ინფორმაცია ავტომობილებზე',
          'Fragmented information about cars',
        ],
        logo: '../../assets/img/folder.png',
      },
      {
        title: [
          'ოსტატების დროის აღრიცხვის ცდომილებები',
          'Errors in recording the time of masters',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: [
          'კონტროლის მექანიზმების არარსებობა',
          'Absence of control mechanisms',
        ],
        logo: '../../assets/img/profileIcon.png',
      },
      {
        title: [
          'მომხმარებელთან არაეფექტური კომუნიკაცია',
          'Ineffective customer communication',
        ],
        logo: '../../assets/img/policyIcon.png',
      },
      {
        title: [
          'დოკუმენტების არაეფექტური მართვა (ფურცლომანია)',
          'Inefficient document management (paperwork)',
        ],
        logo: '../../assets/img/managmentIcon.png',
      },
      {
        title: [
          'ცდომილებები მარაგების აღრიცხვაში',
          'Mistakes in inventory accounting',
        ],
        logo: '../../assets/img/folder2.png',
      },
      {
        title: [
          'რიგები სერვისის გაწევის პროცესში',
          'Queues in the process of service delivery',
        ],
        logo: '../../assets/img/chartIcon.png',
      },
      {
        title: [
          'პრეისკურანტებში ფასების მოძიების სირთულეები',
          'Difficulties in finding prices in pricelists',
        ],
        logo: '../../assets/img/searchIcon2.png',
      },
    ];
  }

  useCaseInfo() {
    return [
      {
        img: '../../assets/img/webapp2.png',
        title: ['მართვა', 'Manage'],
        text: [
          'სისტემაში შესაძლებელია პროგრამის მომხმარებლებისთვის როლების მინიჭება მათი უფლება-მოვალეობების მიხედვით და თითიოეულ როლზე  წინასწარ განსაზღვრული უფლებების მინიჭება.',
          'In the system, it is possible to assign roles to the users of the program according to their rights and duties and to assign predetermined rights to each role.',
        ],
      },
      {
        img: '../../assets/img/adIntegration.png',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამის მოხმარებლების ავტორიზაციის პროცესის დაკავშირება შესაძლებელია აქტიურ დირექტორიასთან (AD)',
          'Application user authentication process can be linked to Active Directory (AD)',
        ],
      },
      {
        img: '../../assets/img/mobileInterface.png',
        title: ['აღრიცხვა', 'Accounting'],
        text: [
          'პროგრამაში გაციფრულებულია ყველანაირი საგარანტიო პირობა, როგორც შიდა ისე მომწოდებლის განარტიის შემთხვევაში.',
          "All warranty conditions are digitized in the program, both in case of internal and supplier's warranty.",
        ],
      },
      {
        img: '../../assets/img/devices03.png',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამა ინტეგრირდება საბურალტრო და ERP სისტემებთან, რაც იძლევა მონაცემების ლაივ რეჟიმში გაცვლის შესაძლებლობას',
          'The program integrates with inventory and ERP systems, which provides the opportunity to exchange data in live mode',
        ],
      },
      {
        img: '../../assets/img/mobileInterface.png',
        title: ['დაჯავშვნა', 'Book'],
        text: [
          'პროგრამაში შესაძლებელია ავტოსერვისზე წინასწარ ჩაწერა: ავტო-ტექნიკის როგორც სერვის ცენტრში მიყვანი, ისე ოსტატის ადგილზე მივნილების შემთხვევაში.',
          'In the program, it is possible to register for a car service in advance: in the case of bringing the vehicle to the service center, or in the case of a business trip to the masters place.',
        ],
      },
      {
        img: '../../assets/img/adIntegration.png',
        title: ['ციფრული', 'Digital'],
        text: [
          'პროგრამაში გაციფრულებულია ავტოსერვისთან დაკავშირებული ყველანაირი დოკუმენტი: პრეისკურანტი, ავტოსერვისის ხარჯთაღრიცხვა, მიღება-ჩაბარებები და ინვოისები.',
          'All documents related to car service are digitized in the program: price list, car service cost estimate, receipts and invoices.',
        ],
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: ['ციფრული პრეისკურანტი', 'Digital price list'],
        Desc: [
          'გაციფრულებულია კომპანიებთან სატენდერო ხელშეკრულებები და პრეისკურანტი. მის  მიხედვით აღირიცხება სატენდერო ვადის განმავლობაში სერვისის გაწევისას ნაწილების, შეკეთებისა და სახარჯი მასალების ფასები ',
          'Tender contracts and price lists with companies have been digitized. According to it, the prices of parts, repairs and consumables during the service provision during the tender period are recorded.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse1.jpg',
      },
      {
        Title: [
          'სრული ინფორმცია ავტომობილების შესახებ',
          'Complete information about cars',
        ],
        Desc: [
          'ლაივ რეჟიმში შეგვიძლია პროგრამულად ვნახოთ რომელი ავტომობილია დასრულებული და რომელი იმყოფება შეკეთების პროცესში. ასევე, მივიღოთ ინფორმაცია ასანაზღაურებელი და საგარანიტიო თანხების შესახებ.',
          'In live mode, we can programmatically see which car is finished and which one is in the process of repair. Also, to get information about refundable and guarantee funds.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: ['პროცესების კონტროლი', 'Prcess Control'],
        Desc: [
          'პროგრამულად ფიქსირდება და აღირიცხება: ტექნიკის მიღება, ბოქსში განაწილება, ოსტატზე მიმაგრება, დეფექტური აქტის შედგენა, ხელოსნის მიერ გაწეული სერვისი და საჭირო ნაწილები და ბოლოს - მიღება-ჩაბარების გაფორმება',
          'Programmatically fixed and recorded: receipt of equipment, distribution in the box, attachment to the master, drawing up of the defective act, the service provided by the craftsman and the necessary parts, and finally - signing the acceptance-handover',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: [
          'ავტოსერვისის პროცესის გაციფრულება',
          'Digitization of the car service process',
        ],
        Desc: [
          'პროგრამაში ერთიან ციკლში აღირიცხება ავტომობილის რეგისტრაცია, ავტოსერვისის ინიცირება, ავტომობილის დათვალიერება, სერვისის ღირებულების დადგენა, შეკეთების პროცესი და მიღება-ჩაარების გაფორმება.',
          'In the program, vehicle registration, initiation of car service, inspection of the vehicle, determination of the service cost, repair process and acceptance-handover registration are recorded in a single cycle.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo3.svg',
        imgColor: '#FFCD00',
        picUrl: '../../assets/img/collapse3.jpg',
      },
      {
        Title: ['ოსტატების მენეჯმენტი', 'Master Management'],
        Desc: [
          'ავტოსერვისის დავალებას ემაგრება ოსტატი - ხოლო დავალების დასრულებისას პროგრამაშივე შესაძლებელია დავალებაზე დახარჯული დროის აღრიცხვა. რეპორტებში კი ვხედავთ თითოეული ოსტატის მიერ დახარჯულ ჯამურ საათებს, ხოლო ასანაზღაურებელ თანხას პროგრამა ავტომატურად გვითვლის.',
          'A wizard is attached to the auto service task - and when the task is completed, the time spent on the task can be recorded in the program itself. In the reports, we can see the total hours spent by each master, and the program automatically calculates the amount to be reimbursed.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo4.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse4.jpg',
      },
      {
        Title: ['მარაგების კონტროლი', 'Inventory Control'],
        Desc: [
          'საბუღალტრო სისტემებთან ინტეგრაცია გვაძლევს სრულ ხედვას საწყობებზე არსებულ ნაშთებზე და საშუალებას გვაძლევს ავტოსერვისის გაწევისას გამოყენებული ნაწილები და სახარჯი მასალები ავტომატურად მარაგებიდან.',
          'The integration with the accounting systems gives us a complete view of the balances in the warehouses and allows us to automatically draw the parts and consumables used in the car service from the stocks.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/law.png',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
