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
        title: ['მომსახურების გაწელილი პროცესი', 'Over-time service process'],
        logo: '../../assets/img/searchIcon.png',
      },
      {
        title: [
          'ფრაგმენტირებული ინფორმაცია ავტომობილებზე',
          'Fragmented & non-centralized information about vehicles',
        ],
        logo: '../../assets/img/folder.png',
      },
      {
        title: [
          'ოსტატების დროის აღრიცხვის ცდომილებები',
          'Inaccuracy in masters’ time recording',
        ],
        logo: '../../assets/img/location.png',
      },
      {
        title: ['კონტროლის მექანიზმების არარსებობა', 'Poor control mechanisms'],
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
          'Inefficient document management - Endless papers',
        ],
        logo: '../../assets/img/managmentIcon.png',
      },
      {
        title: [
          'ცდომილებები მარაგების აღრიცხვაში',
          'Inaccuracy in inventory accounting',
        ],
        logo: '../../assets/img/folder2.png',
      },
      {
        title: [
          'რიგები სერვისის გაწევის პროცესში',
          'Endless queues in service',
        ],
        logo: '../../assets/img/chartIcon.png',
      },
      {
        title: [
          'პრეისკურანტებში ფასების მოძიების სირთულეები',
          'Difficulties in finding prices in contracts',
        ],
        logo: '../../assets/img/searchIcon2.png',
      },
    ];
  }

  useCaseInfo() {
    return [
      {
        img: '../../assets/img/sec4Imgs/adIntegration.png',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამის მოხმარებლების ავტორიზაციის პროცესის დაკავშირება შესაძლებელია აქტიურ დირექტორიასთან (AD)',
          'The application’s user authentication process can be integrated with Active Directory (AD).',
        ],
      },
      {
        img: '../../assets/img/sec4Imgs/mobileInterface.png',
        title: ['აღრიცხვა', 'Accounting'],
        text: [
          'პროგრამაში გაციფრულებულია ყველანაირი საგარანტიო პირობა, როგორც შიდა ისე მომწოდებლის განარტიის შემთხვევაში.',
          'All warranty conditions are digitized in the program, covering both internal and supplier warranties.',
        ],
      },
      {
        img: '../../assets/img/sec4Imgs/devices03.png.png',
        title: ['ინტეგრაცია', 'Integration'],
        text: [
          'პროგრამა ინტეგრირდება საბუღალტრო და ERP სისტემებთან, რაც იძლევა მონაცემების ლაივ რეჟიმში გაცვლის შესაძლებლობას',
          'The program integrates with accounting and ERP systems, enabling real-time data exchange.',
        ],
      },
      {
        img: '../../assets/img/sec4Imgs/masterService.png',
        title: ['დაჯავშვნა', 'Book'],
        text: [
          'პროგრამაში შესაძლებელია ავტოსერვისზე წინასწარ ჩაწერა: ავტო-ტექნიკის როგორც სერვის ცენტრში მიყვანის, ისე ოსტატის ადგილზე მივნილების შემთხვევაში.',
          'The program integrates with inventory and ERP systems, facilitating real-time data exchange.',
        ],
      },
      {
        img: '../../assets/img/sec4Imgs/digitalService.png',
        title: ['ციფრული', 'Digital'],
        text: [
          'პროგრამაში გაციფრულებულია ავტოსერვისთან დაკავშირებული ყველანაირი დოკუმენტი: პრეისკურანტი, ავტოსერვისის ხარჯთაღრიცხვა, მიღება-ჩაბარებები და ინვოისები.',
          'All docs related to car service are digitized in the program, including price lists, estimates, receipts, and invoices.',
        ],
      },
    ];
  }

  getCollapseInfo() {
    return [
      {
        Title: ['ციფრული პრეისკურანტი', 'Digital contracts'],
        Desc: [
          'გაციფრულებულია კომპანიებთან სატენდერო ხელშეკრულებები და პრეისკურანტი. მის  მიხედვით აღირიცხება სატენდერო ვადის განმავლობაში სერვისის გაწევისას ნაწილების, შეკეთებისა და სახარჯი მასალების ფასები ',
          'Contracts and price lists are digitized, allowing easy tracking of prices for parts, repairs, and supplies throughout the service period. This ensures transparency and efficiency during the service process.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo1.svg',
        imgColor: '#2DC302',
        picUrl: '../../assets/img/collapse1.jpg',
      },
      {
        Title: [
          'სრული ინფორმცია ავტომობილების შესახებ',
          'Complete information about vehicles',
        ],
        Desc: [
          'ლაივ რეჟიმში შეგვიძლია პროგრამულად ვნახოთ რომელი ავტომობილია დასრულებული და რომელი იმყოფება შეკეთების პროცესში. ასევე, მივიღოთ ინფორმაცია ასანაზღაურებელი და საგარანიტიო თანხების შესახებ.',
          'We can easily see which cars are finished and which are still being repaired, in live mode. We can also access information about refundable and warranty funds.',
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
          'Program records include: receiving the vehicle, organizing it in the service box, assigning to the technician, creating a defect report, documenting the services provided and parts used, and finally, signing the acceptance and handover.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/collapseLogo2.svg',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse2.jpg',
      },
      {
        Title: ['როლებისა და უფლებების მართვა', 'Users & Roles'],
        Desc: [
          'სისტემაში შესაძლებელია პროგრამის მომხმარებლებისთვის როლების მინიჭება მათი უფლება-მოვალეობების მიხედვით და თითიოეულ როლზე წინასწარ განსაზღვრული უფლებების მინიჭება.',
          'The system allows you to assign roles to users based on their rights and responsibilities, with predefined rights for each role.',
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
          'A dedicated master(s) are linked to service tasks, allowing management to record the time spent on each task once its completed. Reports show the total hours worked by each master and the program automatically calculates the compensation amount.',
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
          'Integration with accounting systems ensures a complete view of warehouse balances and allows for automatic tracking of parts and supplies used in the car service.',
        ],
        learnMore: ['გაიგე მეტი', 'Learn more'],
        imgUrl: '../../assets/img/law.png',
        imgColor: '#6C6EFB',
        picUrl: '../../assets/img/collapse5.jpg',
      },
    ];
  }
}
