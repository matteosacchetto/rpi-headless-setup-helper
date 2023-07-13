_get_last_opt() {
  local last_opt="";
  local size=${#COMP_WORDS[@]}
  for (( i=0; i<=$size; i++ ))
  do
    if [[ ${COMP_WORDS[$i]} =~ ^-{1,2}(.+)$ ]]; then
      last_opt=${COMP_WORDS[$i]};
    elif [[ ${COMP_WORDS[$i]} =~ ^-.*$ ]]; then
      last_opt=''
    fi
  done
  
  printf "%s" "$last_opt"; # echo does not escape properly '-*' options
}

__rpi-headless-setup-helper_completion() {
  local prev=$(_get_pword)  
  local cur=$(_get_cword)
  local subcommand=${COMP_WORDS[1]}
  local last_opt=$(_get_last_opt);

  case $subcommand in
    ssh)
      case $last_opt in
        *)
          COMPREPLY=($(compgen -W "-v --version -y --yes -s --script -h --help" -- "$cur"))
          return 0;
        ;;
      esac
    ;;
    user)
      case $prev in
        -u|--username)
          COMPREPLY=''
          return 0;
        ;;
        -p|--password)
          COMPREPLY=''
          return 0;
        ;;
      esac

      case $last_opt in
        *)
          COMPREPLY=($(compgen -W "-v --version -u --username -p --password -y --yes -s --script -h --help" -- "$cur"))
          return 0;
        ;;
      esac
    ;;
    wifi)
      case $prev in
        -c|--country)
          COMPREPLY=($(compgen -W " AF AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BA BW BV BR IO BN BG BF BI KH CM CA CV KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CY CZ DK DJ DM DO EC EG SV GQ ER EE ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IL IT JM JP JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MP MK NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW SH KN LC PM VC WS SM ST SA SN SC SL SG SK SI SB SO ZA GS ES LK SD SR SJ SZ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW AX BQ CW GG IM JE ME BL MF RS SX SS XK" -- "$cur"))
          return 0;
        ;;
        -i|--id)
          COMPREPLY=''
          return 0;
        ;;
        -p|--psk)
          COMPREPLY=''
          return 0;
        ;;
      esac

      case $last_opt in
        *)
          COMPREPLY=($(compgen -W "-v --version -c --country -i --id -p --psk -y --yes -s --script -h --help" -- "$cur"))
          return 0;
        ;;
      esac
    ;;
    advanced)
      case $prev in
        -t|--timezone)
          COMPREPLY=($(compgen -W " Africa/Abidjan Africa/Accra Africa/Addis_Ababa Africa/Algiers Africa/Asmara Africa/Bamako Africa/Bangui Africa/Banjul Africa/Bissau Africa/Blantyre Africa/Brazzaville Africa/Bujumbura Africa/Cairo Africa/Casablanca Africa/Ceuta Africa/Conakry Africa/Dakar Africa/Dar_es_Salaam Africa/Djibouti Africa/Douala Africa/El_Aaiun Africa/Freetown Africa/Gaborone Africa/Harare Africa/Johannesburg Africa/Juba Africa/Kampala Africa/Khartoum Africa/Kigali Africa/Kinshasa Africa/Lagos Africa/Libreville Africa/Lome Africa/Luanda Africa/Lubumbashi Africa/Lusaka Africa/Malabo Africa/Maputo Africa/Maseru Africa/Mbabane Africa/Mogadishu Africa/Monrovia Africa/Nairobi Africa/Ndjamena Africa/Niamey Africa/Nouakchott Africa/Ouagadougou Africa/Porto-Novo Africa/Sao_Tome Africa/Tripoli Africa/Tunis Africa/Windhoek America/Adak America/Anchorage America/Anguilla America/Antigua America/Araguaina America/Argentina/Buenos_Aires America/Argentina/Catamarca America/Argentina/Cordoba America/Argentina/Jujuy America/Argentina/La_Rioja America/Argentina/Mendoza America/Argentina/Rio_Gallegos America/Argentina/Salta America/Argentina/San_Juan America/Argentina/San_Luis America/Argentina/Tucuman America/Argentina/Ushuaia America/Aruba America/Asuncion America/Atikokan America/Bahia America/Bahia_Banderas America/Barbados America/Belem America/Belize America/Blanc-Sablon America/Boa_Vista America/Bogota America/Boise America/Cambridge_Bay America/Campo_Grande America/Cancun America/Caracas America/Cayenne America/Cayman America/Chicago America/Chihuahua America/Costa_Rica America/Creston America/Cuiaba America/Curacao America/Danmarkshavn America/Dawson America/Dawson_Creek America/Denver America/Detroit America/Dominica America/Edmonton America/Eirunepe America/El_Salvador America/Fort_Nelson America/Fortaleza America/Glace_Bay America/Godthab America/Goose_Bay America/Grand_Turk America/Grenada America/Guadeloupe America/Guatemala America/Guayaquil America/Guyana America/Halifax America/Havana America/Hermosillo America/Indiana/Indianapolis America/Indiana/Knox America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Tell_City America/Indiana/Vevay America/Indiana/Vincennes America/Indiana/Winamac America/Inuvik America/Iqaluit America/Jamaica America/Juneau America/Kentucky/Louisville America/Kentucky/Monticello America/Kralendijk America/La_Paz America/Lima America/Los_Angeles America/Lower_Princes America/Maceio America/Managua America/Manaus America/Marigot America/Martinique America/Matamoros America/Mazatlan America/Menominee America/Merida America/Metlakatla America/Mexico_City America/Miquelon America/Moncton America/Monterrey America/Montevideo America/Montserrat America/Nassau America/New_York America/Nipigon America/Nome America/Noronha America/North_Dakota/Beulah America/North_Dakota/Center America/North_Dakota/New_Salem America/Nuuk America/Ojinaga America/Panama America/Pangnirtung America/Paramaribo America/Phoenix America/Port-au-Prince America/Port_of_Spain America/Porto_Velho America/Puerto_Rico America/Punta_Arenas America/Rainy_River America/Rankin_Inlet America/Recife America/Regina America/Resolute America/Rio_Branco America/Santarem America/Santiago America/Santo_Domingo America/Sao_Paulo America/Scoresbysund America/Sitka America/St_Barthelemy America/St_Johns America/St_Kitts America/St_Lucia America/St_Thomas America/St_Vincent America/Swift_Current America/Tegucigalpa America/Thule America/Thunder_Bay America/Tijuana America/Toronto America/Tortola America/Vancouver America/Whitehorse America/Winnipeg America/Yakutat America/Yellowknife Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Macquarie Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Arctic/Longyearbyen Asia/Almaty Asia/Amman Asia/Anadyr Asia/Aqtau Asia/Aqtobe Asia/Ashgabat Asia/Atyrau Asia/Baghdad Asia/Baku Asia/Bangkok Asia/Barnaul Asia/Beirut Asia/Bishkek Asia/Brunei Asia/Chita Asia/Choibalsan Asia/Colombo Asia/Damascus Asia/Dhaka Asia/Dili Asia/Dubai Asia/Dushanbe Asia/Famagusta Asia/Gaza Asia/Hebron Asia/Ho_Chi_Minh Asia/Hong_Kong Asia/Hovd Asia/Irkutsk Asia/Jakarta Asia/Jayapura Asia/Jerusalem Asia/Kabul Asia/Kamchatka Asia/Karachi Asia/Kathmandu Asia/Khandyga Asia/Kolkata Asia/Krasnoyarsk Asia/Kuala_Lumpur Asia/Kuching Asia/Macau Asia/Magadan Asia/Makassar Asia/Manila Asia/Nicosia Asia/Novokuznetsk Asia/Novosibirsk Asia/Omsk Asia/Oral Asia/Phnom_Penh Asia/Pontianak Asia/Pyongyang Asia/Qatar Asia/Qostanay Asia/Qyzylorda Asia/Riyadh Asia/Sakhalin Asia/Samarkand Asia/Seoul Asia/Shanghai Asia/Singapore Asia/Srednekolymsk Asia/Taipei Asia/Tashkent Asia/Tbilisi Asia/Tehran Asia/Thimphu Asia/Tokyo Asia/Tomsk Asia/Ulaanbaatar Asia/Urumqi Asia/Ust-Nera Asia/Vientiane Asia/Vladivostok Asia/Yakutsk Asia/Yangon Asia/Yekaterinburg Asia/Yerevan Atlantic/Azores Atlantic/Bermuda Atlantic/Canary Atlantic/Cape_Verde Atlantic/Faroe Atlantic/Madeira Atlantic/Reykjavik Atlantic/South_Georgia Atlantic/St_Helena Atlantic/Stanley Australia/Adelaide Australia/Brisbane Australia/Broken_Hill Australia/Currie Australia/Darwin Australia/Eucla Australia/Hobart Australia/Lindeman Australia/Lord_Howe Australia/Melbourne Australia/Perth Australia/Sydney Europe/Amsterdam Europe/Andorra Europe/Astrakhan Europe/Athens Europe/Belgrade Europe/Berlin Europe/Bratislava Europe/Brussels Europe/Bucharest Europe/Budapest Europe/Busingen Europe/Chisinau Europe/Copenhagen Europe/Dublin Europe/Gibraltar Europe/Guernsey Europe/Helsinki Europe/Isle_of_Man Europe/Istanbul Europe/Jersey Europe/Kaliningrad Europe/Kiev Europe/Kirov Europe/Lisbon Europe/Ljubljana Europe/London Europe/Luxembourg Europe/Madrid Europe/Malta Europe/Mariehamn Europe/Minsk Europe/Monaco Europe/Moscow Europe/Oslo Europe/Paris Europe/Podgorica Europe/Prague Europe/Riga Europe/Rome Europe/Samara Europe/San_Marino Europe/Sarajevo Europe/Saratov Europe/Simferopol Europe/Skopje Europe/Sofia Europe/Stockholm Europe/Tallinn Europe/Tirane Europe/Ulyanovsk Europe/Uzhgorod Europe/Vaduz Europe/Vatican Europe/Vienna Europe/Vilnius Europe/Volgograd Europe/Warsaw Europe/Zagreb Europe/Zaporozhye Europe/Zurich Indian/Antananarivo Indian/Chagos Indian/Christmas Indian/Cocos Indian/Comoro Indian/Kerguelen Indian/Mahe Indian/Maldives Indian/Mauritius Indian/Mayotte Indian/Reunion Pacific/Apia Pacific/Auckland Pacific/Bougainville Pacific/Chatham Pacific/Chuuk Pacific/Easter Pacific/Efate Pacific/Enderbury Pacific/Fakaofo Pacific/Fiji Pacific/Funafuti Pacific/Galapagos Pacific/Gambier Pacific/Guadalcanal Pacific/Guam Pacific/Honolulu Pacific/Kiritimati Pacific/Kosrae Pacific/Kwajalein Pacific/Majuro Pacific/Marquesas Pacific/Midway Pacific/Nauru Pacific/Niue Pacific/Norfolk Pacific/Noumea Pacific/Pago_Pago Pacific/Palau Pacific/Pitcairn Pacific/Pohnpei Pacific/Port_Moresby Pacific/Rarotonga Pacific/Saipan Pacific/Tahiti Pacific/Tarawa Pacific/Tongatapu Pacific/Wake Pacific/Wallis" -- "$cur"))
          return 0;
        ;;
        -l|--kbd-layout)
          COMPREPLY=($(compgen -W " af al am usa at au az ba bd be bg br brai bt bw by ca cd ch cm cn custom cz de dk dz ee epo es et fi fo fr gb ge gh gn gr hr hu id ie il in iq ir is it jp jv ke kg kh kr kz la latam lk lt lv ma mao md me mk ml mm mn mt mv my nec_vndr/jp ng nl no np ph pk pl pt ro rs ru se si sk sn sy tg th tj tm tr tw tz ua us uz vn za" -- "$cur"))
          return 0;
        ;;
        -k|--ssh-key)
          _filedir;
          return 0;
        ;;
        -h|--hostname)
          COMPREPLY=''
          return 0;
        ;;
      esac
      
      case $last_opt in
        *)
          COMPREPLY=($(compgen -W "-v --version -t --timezone -l --kbd-layout -k --ssh-key -d --ssh-password-disable -h --hostname -y --yes -s --script -h --help" -- "$cur"))
          return 0;
        ;;
      esac
    ;;
    help)
      COMPREPLY=($(compgen -W "ssh user wifi" -- "$cur"))
      return 0;
    ;;
    *)
      COMPREPLY=($(compgen -W "-h --help -v --version ssh user wifi advanced help" -- "$cur"))
      return 0;
    ;;
  esac
}

complete -F __rpi-headless-setup-helper_completion rpi-headless-setup-helper