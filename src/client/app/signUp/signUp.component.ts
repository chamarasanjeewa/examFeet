import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SignUpService } from '../services/signUpService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../services/validationService';
import { SharedService } from '../shared/sharedService';
import { Country } from '../models/country';
import { HttpService } from '../services/httpService';
//import * as _ from 'underscore';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-signUp',
  templateUrl: 'signUp.component.html',
  styleUrls: ['signUp.component.css'],
  providers: [SignUpService,HttpService]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpError:string;
   countries = [
   new Country(213,'Algeria (+213)'),
 new Country(376,'Andorra(+376)'),
 new Country(244,'Angola(+244)'),
 new Country(1264,'Anguilla(+1264)'),
 new Country(1268,'Antigua&amp;Barbuda(+1268)'),
 new Country(54,'Argentina(+54)'),
 new Country(374,'Armenia(+374)'),
 new Country(297,'Aruba(+297)'),
 new Country(61,'Australia(+61)'),
 new Country(43,'Austria(+43)'),
 new Country(994,'Azerbaijan(+994)'),
 new Country(1242,'Bahamas(+1242)'),
 new Country(973,'Bahrain(+973)'),
 new Country(880,'Bangladesh(+880)'),
 new Country(1246,'Barbados(+1246)'),
 new Country(375,'Belarus(+375)'),
 new Country(32,'Belgium(+32)'),
 new Country(501,'Belize(+501)'),
 new Country(229,'Benin(+229)'),
 new Country(1441,'Bermuda(+1441)'),
 new Country(975,'Bhutan(+975)'),
 new Country(591,'Bolivia(+591)'),
 new Country(387,'BosniaHerzegovina(+387)'),
 new Country(267,'Botswana(+267)'),
 new Country(55,'Brazil(+55)'),
 new Country(673,'Brunei(+673)'),
 new Country(359,'Bulgaria(+359)'),
 new Country(226,'BurkinaFaso(+226)'),
 new Country(257,'Burundi(+257)'),
 new Country(855,'Cambodia(+855)'),
 new Country(237,'Cameroon(+237)'),
 new Country(1,'Canada(+1)'),
 new Country(238,'CapeVerdeIslands(+238)'),
 new Country(1345,'CaymanIslands(+1345)'),
 new Country(236,'CentralAfricanRepublic(+236)'),
 new Country(56,'Chile(+56)'),
 new Country(86,'China(+86)'),
 new Country(57,'Colombia(+57)'),
 new Country(269,'Comoros(+269)'),
 new Country(242,'Congo(+242)'),
 new Country(682,'CookIslands(+682)'),
 new Country(506,'CostaRica(+506)'),
 new Country(385,'Croatia(+385)'),
 new Country(53,'Cuba(+53)'),
 new Country(90392,'CyprusNorth(+90392)'),
 new Country(357,'CyprusSouth(+357)'),
 new Country(42,'CzechRepublic(+42)'),
 new Country(45,'Denmark(+45)'),
 new Country(253,'Djibouti(+253)'),
 new Country(1809,'Dominica(+1809)'),
 new Country(1809,'DominicanRepublic(+1809)'),
 new Country(593,'Ecuador(+593)'),
 new Country(20,'Egypt(+20)'),
 new Country(503,'ElSalvador(+503)'),
 new Country(240,'EquatorialGuinea(+240)'),
 new Country(291,'Eritrea(+291)'),
 new Country(372,'Estonia(+372)'),
 new Country(251,'Ethiopia(+251)'),
 new Country(500,'FalklandIslands(+500)'),
 new Country(298,'FaroeIslands(+298)'),
 new Country(679,'Fiji(+679)'),
 new Country(358,'Finland(+358)'),
 new Country(33,'France(+33)'),
 new Country(594,'FrenchGuiana(+594)'),
 new Country(689,'FrenchPolynesia(+689)'),
 new Country(241,'Gabon(+241)'),
 new Country(220,'Gambia(+220)'),
 new Country(7880,'Georgia(+7880)'),
 new Country(49,'Germany(+49)'),
 new Country(233,'Ghana(+233)'),
 new Country(350,'Gibraltar(+350)'),
 new Country(30,'Greece(+30)'),
 new Country(299,'Greenland(+299)'),
 new Country(1473,'Grenada(+1473)'),
 new Country(590,'Guadeloupe(+590)'),
 new Country(671,'Guam(+671)'),
 new Country(502,'Guatemala(+502)'),
 new Country(224,'Guinea(+224)'),
 new Country(245,'Guinea-Bissau(+245)'),
 new Country(592,'Guyana(+592)'),
 new Country(509,'Haiti(+509)'),
 new Country(504,'Honduras(+504)'),
 new Country(852,'HongKong(+852)'),
 new Country(36,'Hungary(+36)'),
 new Country(354,'Iceland(+354)'),
 new Country(91,'India(+91)'),
 new Country(62,'Indonesia(+62)'),
 new Country(98,'Iran(+98)'),
 new Country(964,'Iraq(+964)'),
 new Country(353,'Ireland(+353)'),
 new Country(972,'Israel(+972)'),
 new Country(39,'Italy(+39)'),
 new Country(1876,'Jamaica(+1876)'),
 new Country(81,'Japan(+81)'),
 new Country(962,'Jordan(+962)'),
 new Country(7,'Kazakhstan(+7)'),
 new Country(254,'Kenya(+254)'),
 new Country(686,'Kiribati(+686)'),
 new Country(850,'KoreaNorth(+850)'),
 new Country(82,'KoreaSouth(+82)'),
 new Country(965,'Kuwait(+965)'),
 new Country(996,'Kyrgyzstan(+996)'),
 new Country(856,'Laos(+856)'),
 new Country(371,'Latvia(+371)'),
 new Country(961,'Lebanon(+961)'),
 new Country(266,'Lesotho(+266)'),
 new Country(231,'Liberia(+231)'),
 new Country(218,'Libya(+218)'),
 new Country(417,'Liechtenstein(+417)'),
 new Country(370,'Lithuania(+370)'),
 new Country(352,'Luxembourg(+352)'),
 new Country(853,'Macao(+853)'),
 new Country(389,'Macedonia(+389)'),
 new Country(261,'Madagascar(+261)'),
 new Country(265,'Malawi(+265)'),
 new Country(60,'Malaysia(+60)'),
 new Country(960,'Maldives(+960)'),
 new Country(223,'Mali(+223)'),
 new Country(356,'Malta(+356)'),
 new Country(692,'MarshallIslands(+692)'),
 new Country(596,'Martinique(+596)'),
 new Country(222,'Mauritania(+222)'),
 new Country(269,'Mayotte(+269)'),
 new Country(52,'Mexico(+52)'),
 new Country(691,'Micronesia(+691)'),
 new Country(373,'Moldova(+373)'),
 new Country(377,'Monaco(+377)'),
 new Country(976,'Mongolia(+976)'),
 new Country(1664,'Montserrat(+1664)'),
 new Country(212,'Morocco(+212)'),
 new Country(258,'Mozambique(+258)'),
 new Country(95,'Myanmar(+95)'),
 new Country(264,'Namibia(+264)'),
 new Country(674,'Nauru(+674)'),
 new Country(977,'Nepal(+977)'),
 new Country(31,'Netherlands(+31)'),
 new Country(687,'NewCaledonia(+687)'),
 new Country(64,'NewZealand(+64)'),
 new Country(505,'Nicaragua(+505)'),
 new Country(227,'Niger(+227)'),
 new Country(234,'Nigeria(+234)'),
 new Country(683,'Niue(+683)'),
 new Country(672,'NorfolkIslands(+672)'),
 new Country(670,'NorthernMarianas(+670)'),
 new Country(47,'Norway(+47)'),
 new Country(968,'Oman(+968)'),
 new Country(680,'Palau(+680)'),
 new Country(507,'Panama(+507)'),
 new Country(675,'PapuaNewGuinea(+675)'),
 new Country(595,'Paraguay(+595)'),
 new Country(51,'Peru(+51)'),
 new Country(63,'Philippines(+63)'),
 new Country(48,'Poland(+48)'),
 new Country(351,'Portugal(+351)'),
 new Country(1787,'PuertoRico(+1787)'),
 new Country(974,'Qatar(+974)'),
 new Country(262,'Reunion(+262)'),
 new Country(40,'Romania(+40)'),
 new Country(7,'Russia(+7)'),
 new Country(250,'Rwanda(+250)'),
 new Country(378,'SanMarino(+378)'),
 new Country(239,'SaoTome&amp;Principe(+239)'),
 new Country(966,'SaudiArabia(+966)'),
 new Country(221,'Senegal(+221)'),
 new Country(381,'Serbia(+381)'),
 new Country(248,'Seychelles(+248)'),
 new Country(232,'SierraLeone(+232)'),
 new Country(65,'Singapore(+65)'),
 new Country(421,'SlovakRepublic(+421)'),
 new Country(386,'Slovenia(+386)'),
 new Country(677,'SolomonIslands(+677)'),
 new Country(252,'Somalia(+252)'),
 new Country(27,'SouthAfrica(+27)'),
 new Country(34,'Spain(+34)'),
 new Country(94,'SriLanka(+94)'),
 new Country(290,'St.Helena(+290)'),
 new Country(1869,'St.Kitts(+1869)'),
 new Country(1758,'St.Lucia(+1758)'),
 new Country(249,'Sudan(+249)'),
 new Country(597,'Suriname(+597)'),
 new Country(268,'Swaziland(+268)'),
 new Country(46,'Sweden(+46)'),
 new Country(41,'Switzerland(+41)'),
 new Country(963,'Syria(+963)'),
 new Country(886,'Taiwan(+886)'),
 new Country(7,'Tajikstan(+7)'),
 new Country(66,'Thailand(+66)'),
 new Country(228,'Togo(+228)'),
 new Country(676,'Tonga(+676)'),
 new Country(1868,'Trinidad&amp;Tobago(+1868)'),
 new Country(216,'Tunisia(+216)'),
 new Country(90,'Turkey(+90)'),
 new Country(7,'Turkmenistan(+7)'),
 new Country(993,'Turkmenistan(+993)'),
 new Country(1649,'Turks&amp;CaicosIslands(+1649)'),
 new Country(688,'Tuvalu(+688)'),
 new Country(256,'Uganda(+256)'),
 new Country(44,'UK(+44)'),
 new Country(380,'Ukraine(+380)'),
 new Country(971,'UnitedArabEmirates(+971)'),
 new Country(598,'Uruguay(+598)'),
 new Country(1,'USA(+1)'),
 new Country(7,'Uzbekistan(+7)'),
 new Country(678,'Vanuatu(+678)'),
 new Country(379,'VaticanCity(+379)'),
 new Country(58,'Venezuela(+58)'),
 new Country(84,'Vietnam(+84)'),
 new Country(84,'VirginIslands-British(+1284)'),
 new Country(84,'VirginIslands-US(+1340)'),
 new Country(681,'Wallis&amp;Futuna(+681)'),
 new Country(969,'Yemen(North)(+969)'),
 new Country(967,'Yemen(South)(+967)'),
 new Country(260,'Zambia(+260)'),
 new Country(263,'Zimbabwe(+263)')

     
  ];

  constructor(public fb: FormBuilder, public router: Router, public http: Http, public signUpService: SignUpService) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,ValidationService.emailValidator])]//ValidationService.emailValidator
      ,
      passwords: this.fb.group(this.initPasswordValidationModel(), {validator: ValidationService.areEqual})
      ,
      telephone: this.fb.group(this.initTelephoneValidationModel())
    })


  }
  
  onInput(){
      
  }

  initPasswordValidationModel() {
    const model = {
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }
    return model;

  }

  initTelephoneValidationModel() {
    const model = {
      countryCode: ['', Validators.required],
      telephoneNumber: ['', Validators.required]
    }
    return model;

  }




 
    signup() {
          let formData = this.signUpForm.value;
          
        this.signUpService.registerUser(formData)
        
        
       .subscribe(res => {
   
  
                if(res.statusCode==-1){
                   this.signUpError=res.statusMessage;
                }else{
                       this.router.navigate(['/signUpSuccess']);
                //     res.userId = +res.userId; 
                // localStorage.setItem('userInfo', JSON.stringify(res))
                // console.log(res);
                //this.router.navigate(['/login']);
                }

                                   console.log(res)  ;
                                  }, 
                                  err => {

                                      console.log(err);
                                  });
    }
}
