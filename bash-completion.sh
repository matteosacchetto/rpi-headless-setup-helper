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
  
  echo "$last_opt";
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
    *)
      COMPREPLY=($(compgen -W "-h --help -v --version ssh user wifi" -- "$cur"))
      return 0;
    ;;
  esac
}

complete -F __rpi-headless-setup-helper_completion rpi-headless-setup-helper