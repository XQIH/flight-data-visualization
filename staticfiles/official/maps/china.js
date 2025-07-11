(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('china', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@Ma_@B@AcBeRg[YKYNgYV­]u{ãVa\\»[TWmLoÇriD³xA®WV\\É¡_^{KF`@BU³S©kgpCbmCEA@B@A@·\\GyhÉsaDJcQLadTATyiUÓXqB}¥XaÂtKk_NÁES`}UchiJc¡IOe]Y­J[r@B@A@B[HEAA@B@@BAABBCNAFCLeT@P_QzwkHVZhIÒVHZl[ T^n«jXUbPN¯^FlPHVÂjTpżvh~mMR^Ez¢Ð~cdÔ­LûìR¦Th|dBPz¶PnnÄ_VonJĀ zGR`Hx¢tyOLbŘKZRyēîJr^xâK{®PxÄ@¢X~er ML]Voi¥Qc g¬QÜÅD{ _Č\\JOüIÐ}Mn`È\\îWl][q\\¯d{[hßimk`u¯W°¹{qO£dBzp¡Xh¹C"],
                "encodeOffsets": [[120208, 41194]]
            },
            "properties": {
                "adcode": 110000,
                "name": "北京市",
                "center": [116.405285, 39.904989],
                "centroid": [116.41995, 40.18994],
                "childrenNum": 16,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 0,
                "acroutes": [100000],
                "cp": [116.4551, 40.2539],
                "adchar": ""
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@ÅNukIt¯IYZ}]¥¡`e¸VØuBØEljELeRFB@A@B@H~]EPELWFCQZqzQ@s}YCD±]Yý¥ÅfċQmyyÃËZukęeBraÎe@­WgÓgcåYáF_ÁīQ]rhx}kAp_Z{PñBE@D@B@A@C@ÑQe¾ÃF¡TQ~\\ ylA[hvz@zb~@¸H²ABBAEF[¾tVQÆd gheWnJ@lB¡|bA tjnHª´TAVvfZUH]`fG^þyCtlYØG|`¡Aj`ºDGvgOÅpWÌ¢¢MØf`\\ZhfQAd@B@Ab`NtjH°sLp[JcHEDODIhw@ApkyYG{tHraDQ[}sAÅhgU³Cgn£JWgOCACGMj·_q^kQce¦oK}sby^n[P~fP\\hÀQNÆo{PaY{gBqGçM"], ["@@iFgrèNJwM"]],
                "encodeOffsets": [[[120592, 40347]], [[120633, 40319]]]
            },
            "properties": {
                "adcode": 120000,
                "name": "天津市",
                "center": [117.190182, 39.125596],
                "centroid": [117.347043, 39.288036],
                "childrenNum": 16,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 1,
                "acroutes": [100000],
                "cp": [117.4219, 39.4189]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@AABB@AA@B@FB\\G@A@B@A\\q®I^ZPfJ¢Id jdg~VT_ÂFMl` LsbÁ¦W~rAÔWjVSzBScKbRIdCbÊtzgH¸[B@A@B@DFanDolhGimsBa¢{Ak@mIXfhgcRÅsU\\½EFABBA±·G}@ya@uyg\\Bzk[R}¢SÄEf½ÒRD@B@A@C@F@òA|OY`oB~lgw^qĬRÂ `âEæZAç IW§gL¦©ÆIúhjWQ}«wikmHqqQ£įI}s³Uy»Såd¡kñTUÙT¡aě\\åU\\©±@oys_aµ½{[ýõe[}«¦CADBCAW`wa{X]anaSfagºq¥HofÁ_iJ½[¡mMć¹F{uR§áËjoÇgyÙƅEyµ_¯ÅULoÝ·«ftKg_z±C´ZK{aJaPURċel]eÕoW{«UUoV¬d@BABcc·biL]aC£¡ëcX[ª¯F@aïE]_ãE©eCn­~«N[h£PSh©LUrSfcY}lOw@Lh^£SZv­Jiag©yKPeFµqEm¼Dv¡RL|hg}PJ|µXSh~¦FQ\\j¨BæIÈjvG@gGh¼~g|b}``Aº`j¢pbÒºX lnÎèĈEzp²Up»n×]Fp¢¨{Hcøob¾yLHÄÅÀj¨KÛXSOvIyTuZÔX`Æ|T¸øLf¾°Gv®IEh»gtQÖTx~FúàGKXx\\ZfAv¤RpWÒrĀBpQvx²E¹vjbK¢nFÒxJRô­QgÃLoDĠN^ub^WğSBZÏQWpt^cfięriKgDvĳ|¤f~àzOz^`z{Ìtte`²PhKÐhEÀlh¥Fp£iQXÍTs¬Z^`jV´gDRb«ÄiyrBvoM|veV[¦bPÁ\\kĕð¥|¸d´Ajhok}iX_lvThÈ×lNdp\\jEpn²pÌPŊqSÎJN¾n\\Rd]èØ¼ÂRvÊW¸T~XnDR¤lômxVäI^JhSCZ±R÷`qak­UxNÓO¹ž\\YlĄkR}®RRrNh{ÊT`t~zjêb¸N®ärFîptfUÂdÏZ}@A@B@Ax]ÄK~|mt`~Ô@dpX ØX|ÂZyk¼F|~zCPK~d¸Hj¢KêVØÄsAĨS`iÊWÎrzA@XR`NPJvXHA`A^RH`PNÀN`j]¬Aò\\¶i¶BpRE¤oE Bzd²YLZÂ@ÊiLÒ~lKGwºb{ľÿv]¨¡YcÕ}Fi´Ôua¥Pc¸oÞIvvOpxVQpuSoQªcngO¡SÒµIwÓBWµNO§piH sR±ò\\²ilmXW}hĬpĐQ¢HÄuz|ÖlD¸b~WĨYÚD|Y\\tzLTImBfs¿·OAyÕXww^¾UYoO»V]Qyħwu|MYk°MXw¦bLxyºD¨vhY¡d`R¬IUs[ńV¤Mtj²KZqekªcãV®¿YPzX^ÑooXHI|RcQRWfy}Ikpy½SeFkiL¡mi¡b¿Hěßąȣ ½@uókÁ»sµ]qo©ILl²MoiXo­KĽr·uTo±aûyÅ½£AħÂWMÿty² ¡fMZYRb~Z@tyRYrREDKXOFF}^GA@B@A@EQKf NIxrHA|hZOb|ÅpM¿R[gO}eOm\\]aztL~¥pdfR]l`r¸iHNBDDhPX¤Ihm´DhVÆgtB\\~CRqbsGH|zZolB@gxCJCPGFdIo\\K¯tGsiDgºWo¢ycAP¤|r¯º°X_vnlàjg\\c|°[\\rk^íXÇ[m_NÏ~ûJIPċ[`C|ÛÆR«hRdj¦Up^KNq}f¡WÃ@Ow|­áLw]IqĔízYQŗLKaPszw¡_GQyHÿmIUpÃ`mmµOOyA{cgSQ¥üë®KÓdcÏ}y¡]FQNng}ŻuSoÁiUGkOE°]OMVaW¬i]mSk\\YG UJÑYgUGxly R`@OfSDKBEDM"], ["@@e_N×¡¡XËÆohPHu¹C_Bi¢_H{Z×skDýz]eH_G^YVue_@E|L]¢`ÊU[X­wBC´qjpÈKXnS¼\\b[äUv|®^UhZMLZ"], ["@@k×FA×v·U_f¦¢~^ZY°JJsvlÆMhq"], ["@@WT¦"]],
                "encodeOffsets": [[[118500, 40494]], [[120024, 41045]], [[120612, 40322]], [[121723, 40083]]]
            },
            "properties": {
                "adcode": 130000,
                "name": "河北省",
                "center": [114.502461, 38.045474],
                "childrenNum": 11,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 2,
                "acroutes": [100000],
                "cp": [115.4004, 37.9688]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@ëTufÂZHÂ_üÀ¸¾¬ňQÂ\\ZGÚÜzð®ĈzlÀj~ÎKĊkADL]|^rqlAokøTÀdl@¸]jxÈFap~]ÊPv£kfPlWRª`aNd¡vT`ÒDh[QffxAp²¤¾ÎTtzLW~b«VWZ\\ÀĄ^hrXÄrhoQ~Ve~ËrTpN]±jïŎÑJgnMîfU¼fhHXèrVºB\\ØfZ[\\G´VZ¼kLe¢A~¦¨ü[jlnM}fzl²TRvSd²úK\\FolNr}YFrHd|`ƒElX\\ ¸|Qf¶hT]ªlzBČ{PÂ¾a¸]¸dYtVĔ|¸¶èRtBn¤¦BÈVBÎJ°ĴèµUĔ¨ļŔ¦LƘrsËÐAĨ`º\\ňĎØt´µL¸¤ÀB¨ZfhGxÐQxjp¦Pzqj¬Ã aQhCU³_iY]t«ÎSRW¤jo¦Eg¿kFÏgLg±O_fss|Ë_y]y yP}ß£eĴ{CuhjLĚqjdes]XoÐRAYĠTXa]vM]CğpÄKh®RóQIwEÑmL¡iaºu±FwRuoÿAÑqoX£QueBY[WwLHùß}ESwRÕhs¼gFJu­¯He½÷KS·{_ÅWYÓvzSJuPTÜWLi§Æ¿GÃzK½pad÷|G§¡EoØ^¼mVoo±FyçćmÍkW¹aÑoi¡¹_B_~_ah{}»gH@hHiuJÇå§A[iRE}¥Tg¶WI{~Oh{gK¢QuCn»JokH`O°sNg³G`S^¹skO_}PJ¿a½pßgnic»J~aFBpV¡_¹s@ZO­»n­AIgFa½me¹lÏPUmL±WCk¥g¿^£§«Aû´RĽOĹjoeã@b½asfádáRh»svS±LmUipCbĻkE{ÇyÛgdW{s[kuToÁR¥ob«qZm}ëf}©é_¹±pa»is·yDċFÝqx¿mZ"],
                "encodeOffsets": [[113029, 35432]]
            },
            "properties": {
                "adcode": 140000,
                "name": "山西省",
                "center": [112.549248, 37.857014],
                "centroid": [112.304436, 37.618179],
                "childrenNum": 11,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 3,
                "acroutes": [100000],
                "cp": [112.4121, 37.6611]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@Ġ[ҤÛ̪«̎]ΔҦϨäBɤY®®т]Gήíɢ³ǲiKØÑǊǙpQ̘áüfæOúCʺĿƼÅǰãIΐÙǰFȔĢjĦ^MǵƒaĬPĴBðÑȆƚ¼CĀ¢ǢúŸ¼ɬê˨ĲxXȬäƢ¦ɠxȄ¢ƌCÖƊFǢW ThÊFŰr¼kȠHƢ{þD gŜ¬Tɠmǐn¶\\Şò¦jƠ²ǞPǪÈö¸ƊĆ¸îE`¦¬T¦¦ǚƲ¦zæn`Ɯ ²nĜGpǂƄĆBºhj²WÚõĮćÐÏpxēĢcO²ußt[XªĂfbvQÐr¸ÖÌæÒĠŞêĊÌLoʂONĐÏºÏĦ©Śô@Čcào͜keú[æò¼À^ªƂ`ªvĺÐZÀº¦¼ÐhX¾¦bŦƨ©ÂMǎbƾGȆ¢ĨhƐĨÖºø|RpäK¸TLtztAQ´VP|úŤƖtFĆĄvZôÔFÊzlzQȄeŴTľMXOlb ²Äw®ÚfĎFvMfÀLl`M´hCtÊNVb®@à ÌJvNpĂWoŞW¬zoĢU@~¶°ÎFCUºpÀÍ¦z^¤SÀBÀVba¶ºSÈJ_¶NtiIiÀV~S\\°Y¬@pcf_ÀN¨É\\]¢¥¢IbTÚÆõª¹BQ°ĝ¦Yt©hitH¦Ɖ«jcḷ̌ĚǣȄŁHgf¡FmUÉJjBTóIuVaa±aùE×^ÕSʇȝSisGğįʏƶǹÐóHĹMǻ­ƽŕ«gWţĹ{M̝ȨƸL~ajʂĐXDoɌȨɂRX{¨͊ҴʒΖfB˨ŷǮ¹ǦEź·ƞ­~bîJx`QÒD ¬xS°TÂ\\pÌb^fYt¶PIBn~IÊ|ÊQlZ~GƢdSĞNR~Gd W®hJUthLplpVº~hmM^akyjedj\\§V¬OLvxPXD [xb`Â`Q`BjV´ÎUPfa\\M¨à²|¨r¢N¤OpdWthNb¦yp\\Wq|hcdØnAÀr\\Gb¼RXh^inHp`anp¨^[|îD®ÌpHxKbâlB~ÌEAtĞfLt\\uXAjvtZ^rOxvj¢T¬Fi|XulG~TGhIpzgf¢tVhHkfLÝk^ÅyěNāÍP¥@uX[¢¼ÊÎ^rKÚxCl²`X¢b¬Þær`~xJH~ðbCc| T``¬K^RĖK`}vRÔIäjzräKêdL]ÐxFkAeIJq´qDS]wÏi¥]«iKgbg{y­oumMmå©ÁMcq±¯ik°RY|¸YJm¶ajDryHtc¦Dqg}´As°SÔsºC d|¸J¨^UZvZC`|HRq|iĔL^_btAXcizf«Kê[taþVi¦Vv]kgF«u[½G^qetQ\\»hoHF¹o{jWN«m|£JmuosiLokYl[udmzUH{Ujc@ÈR¸mĔg@SÀ]dIXtOp`ĴP@ZâXCrª°ê¢Ni\\Z°TÞCfjLÂO JtSIÊkp|E~bvHZfÆIWÊJ¸tX|hJæYjz¶svXr°Tjl@tpYÀ|@DoHW^Z¼Kvq\\|mĒ×wJEBEnY@UFMÖ«©j[B´B[^ÇOp`pIcêsP{x]umDoiBzkuyQXU­YVqeYqbuO]Ymo^kU_lmMal{sC_o[`_wy¡NcWlyaM}d]_ruQVeÉF{qMNiuHOw¡UqÅFYio|UGoGWiuZa~K^kicQU}DTqvYY]iG^o½]}CakjOK³JfsbFIcxZ\\rBH·mFb«]c@l_kgJ\\yQ¹C{eé~Jh³[ÛlcY[hi³©­W@NeMSuXqXmÍm·zi_in£mdeK£ziMmi{jK½dcqmwAYs¥U^ZH±RMTv³W\\|kjnyjX ¯ĹÕ·w¹ſķĭ×ŁęoȥËÝ©«ĵī£Ýoë¹ƝÉ§©āõ¥nlo³ªÂ}AĢwLMqËEypaM_¢I²pAÅZóøN}nW¨tvS¼JÂrfCzØ^VÎCz±KEUð¯Ät]ĉpg´AZhBz@Kmvkg¦[DíyŅCĝQ£_CF©ytéUihIN§IP¥B÷àñ¬¥¥¥AqCTMooɇuƉy±w@imË}SÏGk~QNe@QÒ¥¸éBT½H]ctğtK~ ĥ|I`¹CilqA³q ZacXsEYYµNYcnq uĈ]Bd°^ÊQcÍOq{ExR¾ĖX}@áügQÍu£FTÕi¡q]Z­Q{C¤ÿDÎYwa^Q¦NT_u]wV·dÄczH¶CRÉEči¯¢mƐH^łDx¸¨ĂzƚĂ\\¸HZqW}bwws\\ÌkäýTÀeoyWmOF±]}Qv_ÒčM©_{Cuf¡uSB÷JZmxMQmýj¯ar[w¤Of]¹lzNt\\Â¥ĂJIĉMZ_j{}I­§©OH½]ĥwÁMÙÉJ}g¸yġ}¹ßRqgfCGeÁ¡\\I^áE{SbI~gPĳ`ïYj­ÊMl]Ã¡@o³[]^ÁV³@¡@ótU\\sãUFmuQL§£YX[{]V±}£C½¶Hl{ÃIw^k£AåTO}Ça©YgCcqWn·^§S@w­TQq}SJogć£Za_ďxaLµsTÃR]WWk~MGaHuIKk±­V»XU|tQeCèrE¨u^Etqbk }hOdYćGÃ|ÁXOr§ZeR@rHrg¥{ícËKk_R}lONwA{SÇ§­AbSaVekÇi]tuBekP¡ÖwJm·A@kIoYCÇaji»³UyK[s{ZÙCħZ}X·aCÕky{Ãv¡GďRīog~XWkn±j[ñQ²tGojP¨¶MXAÔJxÑ¶TP¢mh©d RTpovRwUPouuÝJ·pOdb¦Óv³EjÖ~Zd§¢^uĽĀa|¹HxkLÑ}KÉjÁ@KY±ZcAypFF£oQµAµjñ[«B^_i¿MOMG_]Q_BGBuWOI_MWQB@qyXÍjÉ_ħTtBÃU×é¡Li·G}cLOyD{}»ElzÁYW{×WcoÓ@_}ns}{ÃLw^@BY~ÐÁceVosíEãq­M·éayi}_sÉSg|qMQ­QQ~ălkZŽ[PºMÔw®Vbl_rQøY²DTIg]ãJwUón£kQmCW}·SÉXQu»Áç×^Qcm[½MITÍŉrËO±oomiF[oMcØkgÇuS`kWjl~pgiB³·c¦{ĖïlÂ[aO\\¥fU{upNAu¥OioRwÏHweg§Y¿A·£K³¶×sŇč¹[ħ_ÏBÌqtƗ¥Kœ§ĻēVç¶ĳ¯IÍAUÇA£¥AmQsµç{·UēsZ·c^·½bÁOċ|yA©k^gSeµR·{[kWƑF{_cTVtAI r@tLcfyëM·ÉSk]ñęM{ÛM{`}Mm¡jIŃĆ]bùwkVtIn×ĝËáG¹ºyø©É§zEfµ£a¹h[Y¡ÕÙ¥zÉ§¿ÃeU{¯rãÍk×E£uÿ\\gt«ĖÁehAe§MQS²U«C|¹y¯M½Rõ_eNÃ[aµ@i]Ñcă¡Y¿{ķQObRSWc¹_á~}EWfZxU¬ćjjġj£oõ|Ë¨W^|¢h¿Òùt¥©Niu¡JgaCËXérã^véwHÓ~Õ´ĲÐ¢æ^Ŋ Ĳ |æĊĮĀfîI|l±^gbð}jIx`Bs¬}TÉo@d«]YğhĻ{`ÿUm]·XmjqU¥Ëc·Rgu]§l©éÅC­kiRi¯l£eoPw·^oWP[iÏq±iyMÅZºãÃJß¿ëw¯LM±amōIÁ`õOýsgÝoé­Ɖ[½wƳaǃO]GWí_i£a¯Iÿ¸ŹĜ½ƃŌ¯hȃÂƪLªƔÊuľÔ£ªόȬŶǶň¦pK°bÞĽŘv°bÌœđJĽőƓíkíÉÑ£¯mŁýĻjɣ¨XĿÔĉoßȏ¡[ğ_Ímþõz]úå|[ŏçËÙąÕē~Ó¶ų¨åZqvhKrý\\I~àģůyOº¹puwpK¤kþ@ǦœAčcĝ\\Dä³JįpsÂZÁàĹdó°çX­béØűzǟYyVfX[PƴäøLð¨zòª¤ƌà@ɜÖÞKĊWTįŰ§ÑDʿpěï͡VAġ¡o»d³öǍÝbI­diæĉu¶ËʃğǓéjÅ¤\\ƛĆËÐɱɮ_ȞưǋˤŹɎŇǶǕ˴"],
                "encodeOffsets": [[99506, 43823]]
            },
            "properties": {
                "adcode": 150000,
                "name": "内蒙古自治区",
                "center": [111.670801, 40.818311],
                "centroid": [114.077429, 44.331087],
                "childrenNum": 12,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 4,
                "acroutes": [100000],
                "cp": [117.5977, 44.3408],
                "adchar": ""
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@QXRd{QGJWpp]ÒyWOZ­ÀUdä© flYr±Lsi£NŃU\\tV«J_Qc¢gZ§u¹CwzaK¥Wx¯NZl{NxvzĨ^R¼UpPZ½V]xxÖWzBPÀ¸etAJnS´V¼ijÈbDpZJ@l¸BInÕxO¢flAsvj^lÈUfbaTB¨®TÈ|BMxkPQ~`LlÌîd¦|hqG@qfQ¨YPqÂWÄ{ĈHZcP~glraFsv]F§qçfDRsV{¼WU²®LlvJGHb}NXlXQ^ÄtS¶KbwĐb`YĈ¤phI~TRr®S@x¨T¸]mXdrDZhªÈb~SPæ¤Blx]ÄJ|Gk¾µD¤²~^U\\|ZW¤K¨vREnäVtV[ôs@@¢´ÂU^]´\\@pÄ¢k^ÉNi®ðZĴ_hOJ}a|TâFJ]¢[ÂHfDheràQºĢ~·zhI~ÚÊÂNĦx^¾GP¨ªJ®~i|`YNJĊN lC¦d¼}K­|[^}ÌiÌ»ÈZdaE{°E X\\k CXs[yüµºûßq®DhaUw©eQÄ@~Ķ¸lrZFpp@f|T¤fJ~ĆdN¹¡zFsoãPµdpC~ cl³ymnpWExa¸N]NomremaQSWe@d_]P¤MXoom@UnM©¨AVwHoHD­N]ÑyM_º}G[ďtFK\\EG³_xIÌf]^W~«xU[s}B¥\\yGRhLxicunkJTT{°BRYg¯¬UuOk}xKYQ¡sE]{UIÊreh¹MwUReËKtuM£AkKEHp]qbsKaçSÉM»yWWDc·Rgvá·ā©c¥ă}ģÑACoM{åÃU{yo»uC}Gm{AEACCUAeomă©H čo§dŝ\\aQě]Yf}EEw{kLqWY_uímIpFÛFIbS]NCRiw~ûkTYwKiTå@[okŁBWw±q£iMUWLF³qo¯ç}oL[[UpwS[¡\\§raBn}DR¬^y³u·z]ªFewÉXQaEÂuU¡U³B­X¯³ģITywIOEi@½Å»Du¬bpcÀfd^IzªBreÐÈRq®¢¼ÞPÖdpzzxªvE¦¤@cxJEn¤SI¨TKhZrē¹EMLHQp}TEzßh}Kahaq^BpZqn²h]eqD`vIľpDDhxZ]¶¤Xp~S°dÖ°ÄG^Td´zvð ¼IPmB}SðFZ`B¾VaxpwTrtba rWDllS`ehAt^^āÌav^¶u]³Qt×L_Cò§H|wÂOqE_£c³^¥KoiDyDwz¹BA§ůj­@·n©I}{goTcÙ[GnAp_]qXmFH¥FuáA[Pw]¥ā¯KoyUwMG_DskiNÅ_kD¡³máEĉģwkFũIogÃA"], ["@@DB^SNGVIL@ďBËj~d®{P"], ["@@@DHD@Fjv¦TSm`{\\i}ut"], ["@@ABAB½EPTĖNVe¯oIv"], ["@@BDdwqJy~S"], ["@@\\[§rb¾I"], ["@@YIBd"], ["@@WL~rSFqc"], ["@@~MGo"], ["@@aZD®°]Ji"], ["@@FdQQ"]],
                "encodeOffsets": [[[122731, 40949]], [[125583, 40230]], [[125255, 40111]], [[125637, 40175]], [[125685, 39972]], [[125976, 40496]], [[125444, 40184]], [[123686, 41446]], [[126041, 40374]], [[126117, 39963]], [[126687, 40700]]]
            },
            "properties": {
                "adcode": 210000,
                "name": "辽宁省",
                "center": [123.429096, 41.796767],
                "centroid": [122.604994, 41.299712],
                "childrenNum": 14,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 5,
                "acroutes": [100000],
                "cp": [122.3438, 41.0889]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@gfÉqJV^|tFR¢ZwLl~vP«Vh°QZ¯AS|SImldvwjgKQH[zA¦~\\twV}¬X]^ËewJ`H´[FELs\\ĐH¹~N`ÒzM^® CGpGxU§BNªmV@pnpW£NO^c`@fTXRnbqfnMp^·MwbFoXmznk´d}oDcO¶päEty¢Mºąc}IeS£e{o@EoqYkĵ·}Ã@RªfVxgb­Crüà¹û¶\\zWtD[lW¯FF|cbÇYË¼Ëj]~{\\L®»~¥cDkMāIÁ¦s[Mkyºe^£P\\xq°bþiRnwNYnøIAvTe¢Dv|`ªNÑĎu`~R^E²nPXpz¿fSãþËl[xtaxX~Yr·G[ƙāāy·§wCŁ]ƏG¡nj°FĎQÊµDGyÃdcU¸^xvS`¥MR]xbÍZC£Ā|DRY®r^j¢SÖ¤EvRÎûh@âW~ĕ½Qw|FPrÎdÉR¯]Acć^vmrZdM¶ZFZ WtbdY´rrBjkºDJ_Ħ{L}Ġssd ^ GS¾êA¦·RÑf@ MRl}ÐHT~Ìjnx@z²ƊɈvppNSrDB¦ÐrmHmÖXnU xÐzÌL¬E¦PØBlf|rDQzwoo`~GUotqoclYIpWNs©Op}OKz}ÄiL}Cx½ZkD{HkSYkrGeosÄbXMQ{p_¾Nhaaltaè`vYZGx¦]Æ`Q rb f YC¬vvCrÄCpÅMomaxªU¸f¬_fj{p Sn°BdcðnvUzNpBõc_®uPwvBÆJQL¤Tm¨Ap]¸jV[¦nPdÀL ĮtlSz\\ÜwIUu A°yJoÂVĞ[N½\\Egµg§Oms_¥\\·«U\\gE¿PqxJlO A]e W^xİOƐ³Zsy©NgWC¡kuþċ¥^LwpíM]°wr^Ibe¦Dpþ`¤|EtyTZX¤l\\]rhj]FUîd\\ÄnDZÞt}|UKmrM{yMtge½fUkl´ÃTµv}|YG³ºXY~hSl©eIh¥\\¥¡Ò^Z_ª_pd´N¨nrO¼F_\\Ef^kÚmh^[¸lVpNfr¾GĸD¤XOEhEpÒÆ¢ZWvpFxU¯J[yfªadLtv@V°®BTjX JC©sy¯[_doQhw@{f§tM¨T\\gÌSºGMKLe²I¦gf£naGªªÊnĬéhtEºIT^EIcgd£oMÓ[¥yIfYW¹gE§CebYEMIkå^a]v©½KhKkczCe{H]U^D½yI{wÇ_¹fse´\\Ò}ËW}©_I§i@qÃRH¦uVĈF|HmbeaWlpuR[]xh¬P_zH¼Z¾hg^¡IVQhtRMnpl\\eGq\\CQµSNLWmdyyIU©e_K±wa±|s}FUT{«Aq]Ts@MaPee¡¦|©POiwBD~se\\[qFmub[í[Si|i©nS]eECizGN{¥i«¡ÅEQ{}aLa[Cµ¯QđtaQb}Akb}KQmċMj»CģPǡG³mÖ§R«W­R¥Y`¹O®­`©a¿JiÇM¯qVjfÏ@¦QkkdLm]wdY]bÙNăG¡Sch¯@aiQ½VKcA[fBB[ÃhB^h­No^ENx¬@QnPTdÅ|jvMJwxGZkRkOu`QÝ¨yCGocYP_y_fm]¿š]cut»kÁÁgkOÅę³ACieCRywRq]bi}_UP£±Bv]ikÑ"],
                "encodeOffsets": [[128725, 41848]]
            },
            "properties": {
                "adcode": 220000,
                "name": "吉林省",
                "center": [125.3245, 43.886841],
                "centroid": [126.171208, 43.703954],
                "childrenNum": 9,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 6,
                "acroutes": [100000],
                "cp": [126.4746, 43.5938]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@¦«¦ßòAøO¦¨JMJjgêV sªzED¤`ĞRņDzCî¥\\hulLny@AYg³BohĊ^Ãsï°VF²LDyÍU×]DyqeÁ»IuT§smXM~÷YôBÆ±o¡JN`obFzÌNrKġxBÁ~©´pkmö¦Ă¨ªƞÊìºÞpĬ¤Ķ¬ªÞȦÌpłĚĮØƀĸº¸xĺÖ°Wziiml[{X´SuN²QGY]¦VZtxBrncd¾iLj|NnyjL¤cf¤nm `jyj¸nnÎWWrTvNfM@X ª®j´g\\ZdÜk´\\Igê}f|DRº[z Ilhk`@^da¬nEG¸qAY[wJdEtaIeL´iPblD~¾^]pjHZ^uZSrCV~Rjd]l}LbvYXjHHp{VjpZÆEr¢VPxvGjMrNE|ÊUfvRq^`~cbNkzdX¢Mxz`\\_`ptD|kNbknV`]lpn^ZPvrafZUr®ZWVRvzl yApjnCvw^O|tédoJo_P]È\\³AAi\\ªÕ¬EN@VmZAFIFxđØn{[ur»L]YXGCp{@¿Zso@ik¯SWqtuµiyåZgIW{·sÉIXÅJYeGauF}o{ÉlJsTIÁPKeiÝD¯S[Yj ¡Mé©¯DqáW@YĳOo_sPWJc¿^@Tēh·nÇQ@idVG|yVcnvk\\lZKpjptvIn{¤n¬MiXp|EºGgp[¼sRf]r¾H \\vE¬lhu^¥UjýUsbé\\L¬yejWdsBa]`ēK{jQr{GD_uYVY§]I·{c¹DÓt¯TBt³ h~r¥CsdGqziCµbIn·Z{Z¯Ql°j²drÂNæªnNvn®p|zahLh¬j^¦ÐjxT^C³rIrfJBlwEÏK^ú\\Ĝ´G¾rºZŴDªKJ¨ÆMRêr}¼}¼\\IÐXÆKúHÀKÊL¦jĞnDSX¬\\Cìo¼AdwxWVXgv`|MXguqCdF¢a~¢D¨UÌ@Ķ±z}@Ê±ÌtLö¡¢ÓUpqªMRSÈKxNöA_Q{l_®KHfk è|ÌRĔD¬K¶eÂx@Ġ¨YBvS¶|tFvkFm¸]K¥Ó}DXQh|Bjb²BvOBqÌ§\\{~udCJÄIUÉcz£UcÇDqkEojwurLXläÈ¡iZsÂR¶§xIy_NĘWHkF_{K{[¸M®gI¶qPa¥çuH[EejwK¢u¡t¥_\\}ªIT_Sb½boŢN[yyN_eÖKl£ueÇJqPCZZYrdTjìVZ[Ow¥ud½JÝÂÈÅ¾s~yüŅºuVkcLÜçSk{»XUºaJÁÚsƀH»gïåK¿¢¥HacÁDªÐMl_FÇvÞê]ªbªGÎ¨EÂ[¸pF´i ĢHTèU_ºYz~¸YVq¥CQâh¼qèU¢én]ºCzZ¨E°ElVI¢`d¸RÎczybăiühSO£qÂEbmSsXg Il}acfiìg°mĚ¿dsCŎºB´I¦jÒ@TÉÇā«@qÊcTeJãvUÄv²ETyD_tw}QesGù»Oo»SČ±j_ÐċJādgeðIÊZ®~LðOĆbòW`URnk¨F¤ªAì{ÚRÚYrðSÐFRI|Rbpj FĈöOnAªntts@n|f@q¦CÄÆĠpfVvrÞtªB¶SÀoĘlWĂRv¼rZÐWtH¢Ê¨NbªJÄh°BrV¢IZ¬Ɣ@ÌpÂ\\Þ[¾HÄGº´Nzd\\ÎWBfvkIåũýûMïÑãÇD§P¨QfaMgPĂ±N÷ßW¥§§wOSmųKUGi¹quiiß®hyFU}áWqa³sZ§AaziiC§gÏûyÑ¥Dq¨IOgÃeMq®O_mVwQuGXa{}xi}iµS_{°·Iw¹½I½@F{rKiiFuwKD[OdOQwYBWn_·[V}G§sQNó@©KyiMB¿u]V_«\\c]iTëEcwe@¡UiP£ēh̵èȁ®ƝwnV[ª{F·}GiJFjg}±QPe¿µÉ{abc]¯n{OsXo@_WV±aGh^ÏoXsmcĩ}NI@s¢EJur[C{jMǘ֏cEKKICaAiábMO±³Gh·a_JfWoµLgk½ÜxNS¹JsFgīêÉm©©Hmbe¤h¥±JKfLN¹HËT[h§SsNe¨|@gxpRc\\`°tzDªIWiS­A¯Uu@Ksc©be\\zI°wVEuoYXÅ¡oÑFFgP£WķC½HeqMUo·k\\g]nlÙe]F`[E»qP§m³Moc©`Y`Ñ]¢[¦¦gJfkªgT}Z¹WH´{Zu~S¶Ä³kleVf¾shzNN|qLn{Vs~ÝCYÃmc[íVEi^qg^[kW£YzSFs£{ý_o¥CafJq]¯xN^oîx]K¦ýČlv¢DhXªMzYtƏ´įP]wX^fBPIkwOrFÀ[hV¬[¸`¦nt¨Ph¶h[FM¾ĝ\\ÁUIp¯zBvJVÛxy[kTĭs¿KOc¥mU\\·io^§Bn£SKRIÅuAOx­v`dAöoyMVuïmcd¯ATmo|ei«`·e©VwbpnNoÆÃDquDuD«ZeaqRÅ_¥^HwYZuç_sbkbbg½Mo`R|NWÃatfpqHZlTGl|CYl¾w~DKÃjy~LPo~ªPMtoXJkZpdsrVp}H_ppyxRqCe{kA×¥O«FËKyÏwmVÕWnGnÏq"],
                "encodeOffsets": [[126135, 47359]]
            },
            "properties": {
                "adcode": 230000,
                "name": "黑龙江省",
                "center": [126.642464, 45.756967],
                "centroid": [127.693027, 48.040465],
                "childrenNum": 13,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 7,
                "acroutes": [100000],
                "cp": [128.1445, 48.5156]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@SÞLl¤NôM¸raò~¬_YÌa~|d¶ÈL_®l\\¾ĮëàiļÑôęŘŋ~¥\\¡Fė`uYȉJã[ë{ùÃ¥ñEE_|[©N^¢~WkpzwdP¤UÜ`SgN"], ["@@jĽ[yûÑRŕ¬µVß~ħ¸IoçÂŧŚuJæÚÆ|¸J¾ ÃÈ_Đ¥KÔqɔ³"], ["@@SgkHſæ½VXSf{ƀ¨F"], ["@@Sj¬EĚö[ÜEL[s©åvëBûZAz"], ["@@¬oKW"], ["@@N\\¸O[»A_²"], ["@@M]u"]],
                "encodeOffsets": [[[123803, 31762]], [[124903, 32376]], [[124719, 32083]], [[124726, 32110]], [[124546, 32200]], [[124871, 31965]], [[124808, 31991]]]
            },
            "properties": {
                "adcode": 310000,
                "name": "上海市",
                "center": [121.472644, 31.231706],
                "centroid": [121.438737, 31.072559],
                "childrenNum": 16,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 8,
                "acroutes": [100000],
                "cp": [121.4648, 31.2891]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@[O^_GMgwÇH³Y^¿lyAoÆUÀJA`´}C@ħCÚGÎ]»»Ĕµo~oŠ«~}ŴuŢËǪëD©ÛjóĲș¤Ý¤ĩxXY¶āépċ|}Ghy[pyĭE k^grħpQĉgY gbeq¸K´{OİèS[{růgL©ìsc_ȠÝZuìÝõæŭJđɓ´ÓrLď¦Ç`Ä½·IÅ{åÙvIŨřèÁy[­kK`Çµ{cb}ZË«`}bñ·qóN£MkKTÝwb§So£P[]tmH¡}EyÅNse¹Ý]J{ÜelMºWcÅ_Z¾¯]ûO×Vf·¦§lY qÄS§\\cs}~ÃSSaw`¯okÉ¨ÑGmlE^qWHwYËhAtA©C_÷N}IĩLÛ[¨}DIr¦nQ´XxdĜFfImº±I{ÄuOWýb@l°jYzÍW[a\\Xp©XnÀbLlĝ¨t°JúVÊK`zŐ`~a¨xcÚLÌ¿I\\b²tHpz`mt`~K~t`sn`xklnÄra~HB@A@B@®©ÆT¿¶ v_jÊhV~mFÊuİÓEµªæwF¹gDFbAEqCWÇÉAIãf£cÃrÏqYTÛQnwFYªySnBÀ§DcÈhnRZnBq|A|qðCàv{£ġAb£|WAEdf¬WzV¬p´aTĴIn° MÔ~©@w¡VÏ{µ`«Cos^RhĮKbW²A¶ay_s®ynãH´iVgYÅF½MvÝpk`v®çÀ\\Äm`Rt¹hågQp§f»BÏjDfē¾[`Ej±UdÐyJLNJĂĨZ²\\Rd²AĔmP¸vSLAÄN©BZ{wGd¬Y¢OX~T¢÷YxýèdHjZIT}^JTJHLX]@eÀÇÖc®Idz¤VtĲyUÄDÌĠONvPĒw~J~Ęuim{D×@Fv¶AZhöQtXX n]ò^EYî¤°RNi´@t_¦`|gdJj Dz¤J~²ÐDèÆt^Uì^ô@pâVdQh"],
                "encodeOffsets": [[122170, 35919]]
            },
            "properties": {
                "adcode": 320000,
                "name": "江苏省",
                "center": [118.767413, 32.041544],
                "centroid": [119.486506, 32.983991],
                "childrenNum": 13,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 9,
                "acroutes": [100000],
                "cp": [120.0586, 32.915]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@q´odrnd°¹f`dc`¼@ÂslĤÃX}þ×]¿EeveW}²RjxP cf^NHÖ¾M^W`~Y¨²ÊQS´p`fiĬ\\H´Z¦`xU®ÂGÜĎÜE´FPúqI¦lBBbÞs\\uÈDØwØwzfeÚ]NT~@¦~nm®tVÂBºSr¯mzxuîlh lfL®EÊ Nx lHeNdZA¬ªGÈhhst°x_TbÄT~}dt¨[TrÃZ¨k¸¥eØUüP°^Y½Æ`XdN¹fk|Û^IºÞtfÆMz~FG¢sn\\^¤Op¨TaxMTh_VÛO£xcy olX}]¡ªM\\`{Fy§_ù¡øç{ĔOupĒáÄÙÖĩdB ¿l_ÀBªìªHyŐTFqc·»Ç[ēăid´[­Iu{HjseuCn[[¥²KDeUJ±o@DeeGç¬qg£p}@Y´c}UęPsqC¹®}Az³Fó@d¹_íėwbUÏWX©tlÃ]qvPRmåWQh¥D§¯­yÁByÉíYTgĀ[\\£ĩoÄ¥IÀX@w~MA¥Y@@EO@A]]A@d|CjC­°TÏė}bAM½©q»§FaÆé{µO¿íuËjcyß­iLµÀC zPïĔEËUUYñ@FcY©uLc¡Skă{×PZnVV|ufPJÊep}F`PGdVÃOa@íycm³]s¥m_KÛRuZRQ«Xej@Hmu¡XâxHª¢KÈĪWÌÃonH¶]¤XHfCXºgCsoL±eMrăiCq`U"], ["@@AWfá[¥ÊXfKn£¾jnĀV¶Ţ[N[UWhgEeGtÛt"], ["@@¡qtRxvR["], ["@@DCs¹`fX"], ["@@fL|}¬VJyėB@"], ["@@\\n^m@hy_ÇßTă Ė"], ["@@`pØ@T©bMgåNN"], ["@@V|ecMZv"], ["@@SBQL]XQvlli\\ZlB[\\{L[¸"], ["@@ß\\_XG¬ĆS¶aC"], ["@@rBsW"], ["@@®_gSv__½wzZ"], ["@@~bnaU"], ["@@DFISABHL"], ["@@vZdJ·fsÄk¶«N÷´{~qô"], ["@@MI{u"], ["@@V°k]ufÀ¢L`®Vi{"], ["@@CIPUI@IACAER@DGDDD@@BDRHACDA"], ["@@qPZzX"], ["@@jxjUa"], ["@@eQr^Vi"], ["@@oTVDi±"], ["@@ILIÄR®KRµ·}qZ"], ["@@@@d@b"], ["@@tHDwz"], ["@@Qe~xZ"], ["@@lQat~t"], ["@@hjv NXi"], ["@@CBC@Xb|mQSy^"], ["@@NzZbI[q"], ["@@B@AA@B"], ["@@D@B@PENCFIHCqX"], ["@@B`i½[T"], ["@@fpA@mUuV"], ["@@ohlbj[em"], ["@@¹X¨Fs¯q"], ["@@]`vlY©q"], ["@@BAFGBAWEAHABDFNB"], ["@@y`p^J}"], ["@@Qy^n"], ["@@~B_s]r"], ["@@|z`Qg"], ["@@B@BCCB@B"], ["@@D@DAGB"]],
                "encodeOffsets": [[[121277, 28968]], [[125096, 30708]], [[125148, 30911]], [[125163, 30426]], [[125366, 31477]], [[125095, 31058]], [[125254, 30976]], [[124955, 29879]], [[125310, 30611]], [[125369, 31139]], [[124762, 29461]], [[125200, 30562]], [[124714, 29781]], [[124111, 28287]], [[124871, 31516]], [[124815, 29155]], [[125115, 30363]], [[125401, 30663]], [[125513, 31380]], [[124795, 29106]], [[124996, 30905]], [[125329, 30690]], [[124775, 30697]], [[123973, 28138]], [[124879, 29889]], [[124968, 30474]], [[124868, 30838]], [[124885, 31015]], [[125088, 30690]], [[125223, 30438]], [[124042, 28454]], [[125707, 30866]], [[125199, 30997]], [[125218, 30578]], [[125728, 31431]], [[124005, 28608]], [[124095, 28635]], [[125394, 30676]], [[125785, 31436]], [[125134, 30689]], [[124958, 30674]], [[123950, 28651]], [[125411, 30646]], [[125084, 30691]]]
            },
            "properties": {
                "adcode": 330000,
                "name": "浙江省",
                "center": [120.153576, 30.287459],
                "centroid": [120.109913, 29.181466],
                "childrenNum": 11,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 10,
                "acroutes": [100000],
                "cp": [120.498, 29.0918]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@¨o´OThh²VFi_\\Ĕ½CeÐi¼A¨eRoæhºgQsn_[Ãè¿u­l_ÞoNu¾ÆEhZUj ³Gäzmt­`bzBµ±XLagĭ]Qtp¬D¶_Ð|¢Uxª@}NÓ¯JmSĳ³boU«Xye«cFBX¤{BaĢ|¤uDßrïB{r{AYmQgmdÇ¨CA¿mzTZ©ExmÜRZSÐrÄq¤deJäÊBXÈrDF BEaCºhxEå¶©ÔFvįEÉnU}Ég`iuµÀÅS­ªA@B@A@}GbÃqmkwlm__t}s}Ls_ny_Gosa±[ÀJKËdÙwb§}ŏ__yLÉUIùs¯Ğ§Kkam¿ªWWo[\\bÎXZyi¯@kþaXvP|Ã²Jn¹Ji@QYvKěwc³WmRq¥J~C§Ü\\ĪK~JøMD`ªBBsÌgxZGXr] FnkÒHÊ§pltsggHÇ«©BcYMfkGwMFÉ­Kekgíkvyw°nTqA¹ÁU­smn¥}}@SMÙ^fye×xx×CvÇt[ÝAaAkJ¥rOù³EFčÛHÛ­ÁwV_¥YG³ī[ejo_T³ÉR±³pQ®bd£RQpZÏ{½CÝpÅiLWhoÅEgNpLzD¾¬N¤UowisXR_{ZMiE­}¦\\o{mJÑDksQÇqËMi|ItÃ zrPDPA@MVsDöþfSĒĐb²~mE wOgvwE­nGwŕuYµAĿ»¿}Em±XQMà¯ÔdÈYtT¤ÐTpË¢WépZr}u`ÈopUwh}GI©¢jÈÌLZ¸]ZbÈrÂvAY´CQpÉZBr«g}iBeaßøT©e{¨AE{âMXlg`be~rÀjQf~tjEĺê°WjcbSzidBt²Wnj¼Mhİ{¾[ƎÊd|\\|rgT}ÓËa{{fíShqmlM¡n[rBB@B@BA@Wpõ´Fvęm@~Io^AcØGºVl^kvNRağRJtsPÅIwhR|EWÈaFL~rMr¨_ńDv¨`I\\fE°´Iv@HoyN^v[xTvjO@¬ljzax¨T¢[®nÚTÖBº°\\^WfĀíJ~ÜBpz²Db| A~b]@HoxEAvxe®Cc¡Ü³E±fotBpØtI®ÞX\\p|IB¢pÔXRvÄgXRCæo°£®Rz|foFrihV¹wJO]®³nLFlva|`vX[xL"], ["@@EeuLRZj@"], ["@@u\\h^tCNUB@COqO"], ["@@B@@A@AAA@F"]],
                "encodeOffsets": [[[118986, 35406]], [[121740, 32276]], [[119481, 30394]], [[118282, 33249]]]
            },
            "properties": {
                "adcode": 340000,
                "name": "安徽省",
                "center": [117.283042, 31.86119],
                "centroid": [117.226884, 31.849254],
                "childrenNum": 16,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 11,
                "acroutes": [100000],
                "cp": [117.2461, 32.0361]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@ÊroMË MÄ{M¬}BuÈlTJÊyRo´J¾Â¬oFJ¾oLJo|PhÃÔlfwLD®ÒrġiakZ}aobX~ÌK{|FpLjbmKc£w«ON}J{¢}íF«²{Kßp_\\kn°B©º°~gyPPwIÚvf´Cj|_°~¾c°pHn^k¾xlA¶Cn¶ªh¥B¢^KlnNSzrĘê[¸YXP]xºrVnbj¤U@¢NN¶~ w@[µ\\bZØI¬]~J®¢ŜQ¸tx_~ðO ĖĂl¤ZFhPDÀv|oMØukojP|krI|df_lfr¼]|NB~J¨NÎu^Fp°`PrvXrQ¨_®ēUynV¢²AÌ¦°HrnW|ĈkEZQrjWtĨ`JÄ^NszĢÎTEV_DrĄjNq²fpKthD¹WDeGW£^GµpmÄXËĩLÇ¡G©wá¢WvGn@fi¬WRQvYÜQL`¦nt´^nzdî@bÄPUcHO_~EfoIÉeOv{UUYmØOĄ|l¢TdvKªZEdò@ZVÌVFðēyOD¶¿·UgğPZ­gQHiIuÙ©Z§CGDQÁehzFDF{EX©qx¯q}\\³D{kTaå§^pÒ¦| @p~ErÌ¤SdğCG¯TeSz}hĹGwmc¯uxuÆnÐO¢w¢ŇAi¸ßªfRm§Ac`_IbāmW»»^¥{\\ÃNpkyęµ]ScCűoQ@{¹@ÏmLÀMM¬N|In@Jn^Dbpî¨J«¬aWe¬o]BKsªBGF]½DqTíMJMn«¢D[Rsa{©O]PpY¢mapy}½HjvknLryLq\\æ©@z_¥T»ÃAsdX¤eXiXucDMÖin§NbªI £gLh}|Y· o{|zQeõwYÀx~·MSHHlKjgPÅc]lzN_EAHQgIFEeEGDKa@scpéo¬Á~GP]Í^GFMtC@@eiË\\wm^s®QDg±OËb}ub¹y¥NHb¯mFŖOÙß^cuRtVM§Å»³SA¼ËNåXŏqÕ¢ep{[ġSM©@ñE±{eÃ«Q»awMµµ]}gÑDeUiÁRs·óµ^WO¿[RÛ{íIUjĉQ"], ["@@MtÍgs©`«Yo|V[¬jT²w°"], ["@@wJ@|lz_vRc£qGct\\"], ["@@@nh"], ["@@Mxzddeu"], ["@@FI"], ["@@Foyit"], ["@@U§·`_xrÞªj qZ"], ["@@SsY"], ["@@pljcmu"], ["@@DxJImS"], ["@@²dB{EW^"], ["@@bn[aa\\"], ["@@cd\\i"], ["@@zRfHc"], ["@@VHDIoEVH"], ["@@a|lpYZTko©O"]],
                "encodeOffsets": [[[120006, 24128]], [[121255, 25103]], [[122339, 25802]], [[122451, 26243]], [[122857, 26820]], [[121069, 24987]], [[122785, 27331]], [[121042, 25093]], [[122808, 26762]], [[122515, 26757]], [[122915, 27125]], [[122534, 26263]], [[122635, 27253]], [[123019, 27189]], [[123250, 27563]], [[123035, 27443]], [[122541, 27268]]]
            },
            "properties": {
                "adcode": 350000,
                "name": "福建省",
                "center": [119.306239, 26.075302],
                "centroid": [118.006468, 26.069925],
                "childrenNum": 9,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 12,
                "acroutes": [100000],
                "cp": [118.3008, 25.9277]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@Z§}X_]½NGÕM]deOwQi~±fXfuFÀØ^~ýÄWģtk@Á_»d_cºec¯qmpcr³SFġÍtyM]IÃħ_sXiRqYFćl{mXq¯GË¥B¡±mUzV­Ĕ`§qRWquO¯_Eov]MÍ§IA}{M»^eq`kce{qJlO{ilpvN×pu{C¿OEgYk£ĕāPï}w`·sRś­¡I^}«JY×[a¶\\x@}Mµ¡M@Vi£amqUw¹^OWZ\\·ėéqTyMmkL¡]A¦©gmµDBµwkl½m]God¯}½`¯i{De³ÙuJxOzOh¯}ª¹¯AlmMneaDxfaaMuÃZaiuZEibHm·JiÁAcºÅjE]¾fºÃe[©nQWi×cákuHkTÁ{}Xaáqime]r©GP¶M¯lėÕuXWÈwf¿GWnÉ`kĔVRp°rL¸°r`MÖ¸vDh¦Fvpz°LSrxÒjA£dPXR¤{ßR¾·~ÁJQwËlgQ±P]d×]uwDawkpX®jÉ¨jx·AdðpBEÐsZøNTº´´@ôg¼Uh]Xêr¤~kªVßu]gÙ`§YnZN¨zQnv¤a|n@J¦hxEø÷dmzëC©¨MĘe¬Z¬b{¬fiÀENÌîtÊe`f@ŧye`CUv`pKtIj~C´DjÄ¸M¼y^rºÐ¢nUf¨[lx~AHp²Sltmpæh\\´GXDlF`°|@ÜN~BfÁnav©r¤SbŚgf`¦{\\¡QiH~WmvHceLjg¢V tz¬ĚZêdNĠ¢jIÂfvc®DÎxvªbÊShorpxE°lzMr`Ul[\\e}ey~Yvzej¬|s®\\AÊ_FØZn¤sTG|Â}ÖJhf¦Z¶¶¨RÒ|ČB²RY²ÚÔq´@ê¢rR²Wn~FÀ ŀ¼¶BvZŖxH®mxFuhxPFn}a±đďeTõýg]v[yÄJsj{ÌNrÈRltCÒI|n[p¥®~FjN|Y`QWtjpxVM£ «C½yKMohÆFpgXKÆjÞo¾DÐ|YRoQ¤acR­´o"],
                "encodeOffsets": [[121030, 30101]]
            },
            "properties": {
                "adcode": 360000,
                "name": "江西省",
                "center": [115.892151, 28.676493],
                "centroid": [115.732975, 27.636112],
                "childrenNum": 11,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 13,
                "acroutes": [100000],
                "cp": [116.0156, 27.29]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@gSgP³§pkmLÁYnMuũkUSn÷\\WÁfÍK\\­°wô^hk¼ġ®»[cZzP\\¿Ey ­GyibµBwi±Rx|Tbt¢l¬jÐbEzbðĬ~CftaRfPÄEÐ´¤VUÀ`ĒŢpĀLÒ^DjS\\nlQNHÖ\\ÄG\\¸êMÉ¹ùeoTgIeÛQ¥ÅAÏORSEO_wY«·{ybzĈSRîBà@pQČOVIbbL|³YDy²`hsLe¸¬pÞVK°Æ`z¶FƆzÚhÈipâÌ¨QvE|ºNĈ¢n¾\\jIÂ`peG¦¹rbhebTm^bWb|x_XDBCADB¬¥\\~fþö|\\¶¾b`zt@pª²[æVĜ[¢bÚSVòS¢læcT¼zV ´~tİJ¤rRGrlnj x BkĺÝvXÊGÄqĨkØIv]ff°UZsdqdQpT¨fRÞZĜNĆeÈxćĠÙdÕ{¨jxªQdÃ{ĥcsQëHŇ[k£ÿF{¸ƭ]^¥~]NdEPoÌ¤[i`üuFµvoTÈ@¾RòMĐ~R[®UÊÀn~Pv~Q N|êTn¼l°Nlb¶bà¨rrN¶`Gl£\\NlŠHòºÂMÖ\\nEÜĚQLD|NÈ[DªuĊHpqaf_Ygt{]ô@¬^QSCJºbĂHhº~iĜMŴNØlh¸T\\\\¾FZg»xb¸ZoM[´aâ@ÒjPk¸Mòl]tJZuke^oFsKrDÏ§]NyJ¥oIÏWkxGæjPaZqÇ_Kx£BfyDMiNKk_ÁNID±XM^p[z±ClaLQGmuQSúqKƅµKyg¥OchÝăfqG¦Ânbn·uSQ»]NXU[@÷ië£ÕF{`Qct¬KjayVwe{FTMImTlkQNÍGÃÓ¦¿çHI±zFI`@¡`{H{_wLki¡P@_ÝGûC©OÔņJjmMZECbOGfK}B}_PqOzy¶IG¸|OjHJv]U}K³£MsGº¯wAYk£W½bsÓ±@Ki~SÍZo³yXMt}WQKiC³uDuē«VqI©n­[ÿ~a¯gB¡EgRcáUoó@ë]]VÅsCç±ÏI}y£CiIhc{¥_s`³@Mj¯Qí£ZF]^ñmWsWõRYgµBEu@CØ|njėv}}IđxOMuğPCËVÃızs£Ucy­JÕd¿È@f^WGKSII~]SJiYGçcwþZ¡ø}SWP¡«ZcxHY|AMªÃBKuTO·ēn±BQc±[ħYIāMKzIcÏ"], ["@@m@{nR|"], ["@@HRun"], ["@@Bx\\X]"], ["@@O¤Q"], ["@@odhVHy"], ["@@\\jjyoaUr"], ["@@q|DI"], ["@@\\Wk"], ["@@BB@A@AAB"], ["@@@ACBD@"], ["@@B@@@@AA@@B"], ["@@sSP`TFPQ"]],
                "encodeOffsets": [[[119168, 35472]], [[123628, 38858]], [[123590, 38896]], [[123894, 37288]], [[123649, 39066]], [[123821, 39266]], [[123043, 36624]], [[123522, 38857]], [[123702, 39204]], [[124405, 38480]], [[124404, 38481]], [[124404, 38481]], [[118286, 36752]]]
            },
            "properties": {
                "adcode": 370000,
                "name": "山东省",
                "center": [117.000923, 36.675807],
                "centroid": [118.187759, 36.376092],
                "childrenNum": 16,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 14,
                "acroutes": [100000],
                "cp": [118.7402, 36.4307]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@ÑVfmKn]w­JyµzKķÒOovL×¤c¢¥qnw·[t£PăÐÉAIzÁc¯ªd¿EÒñ~cigY]ÍE[RcvYD¿¬Ú@{¼~@Tq¶B~õt¯ªPx]D{¥h§AqlA`ZLz§ÎYHânXz ibÁ`MjHËvWpHª}²ÏìXx\\RZYÀnwÞrČE C¸zjtb¼²oºê`~ªìen~Y¬ra¦pÂQpvSlt\\|XcÜhÈzF|ļlaDjonVKT²utg¼âQâcte¾baä@pfĺiľPQü³¬B¤¨À]¦hDl²XKVnÐOºknfb¾hEJ®B¼mP®Y @ºt`¢Uo AE}bId¼mjàhob¾IÀ~O`Ptl]º_T´HMh¯t P_GplIrF¶EOfLzªhjb®IYu¤T ]Kg@Px~kdZeTVqªKTg¤O\\g¬M®}DmªfäF^`ðF@b°E\\©Wìd¢D¤^bKj¸addBA@Ac«pUV¬VX|Öp^ffk@oßAíQTyćza|¬¸xZtTÐÆB¦ÜRJfhSpúfÊºNé[·ÃHÕ[GMRmk[TiCÑ]ÿKođš_V¿£UÏ³ÃFOQesbe}DïīyaFÏai«¡kasSw{²Qxj¶Ajaz®HzÀF[OYyd¼\\Ģ­l»]gxó®¯[ÎLÂeXø[mVTŪlNv mÂZnKlK\\wuW_b{uEkK´m^­P IºxUjgqEp{eQy¤­p¯DåWQÃhQuÓW¡oA{J[oÝW­J×sosAepF²Û´d¢­DwfBuwFGp@^}aBa{Cy±Ao}ÛîIeÿX[]¯A¹ÕÙS­m¡\\Sw§ybki@«iPSu\\w]uzMpGu@J³F¯[eJ§_uŃC§`qN}qKbEXÇFQ{gxÆJtOIsĠQbQMluk]UH¹d×Bp]J@}ĚnEuö³Xo@E\\q¢mNnkrTgîe||bÔÌ~hSq{[c{É\\ƍ|½gįNi»Xms±AjcyTadi¯XĹéiFse}Riq¿}faCg§PD|jNÖdo@¡¦KePemÕhy³pßs]TilUçJ±´qFWNYÀp^ĐJeqñ]f«RµE³æfµQYwËU{kJºri}GoDuVX»t¿¢MzQÌ}[VbRHTPBb]xZT¥Ou©ĥé«xmG`RąÐqt­kE{KUp{I«sQQãZo]whëEgD"], ["@@hzAaSOQG"]],
                "encodeOffsets": [[[115422, 33135]], [[116480, 33048]]]
            },
            "properties": {
                "adcode": 410000,
                "name": "河南省",
                "center": [113.665412, 34.757975],
                "centroid": [113.619717, 33.902648],
                "childrenNum": 18,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 15,
                "acroutes": [100000],
                "cp": [113.4668, 33.8818]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@ZudQ\\ÎF^Zjhdò}ÑÀFc°©d ÂJyÊBĄÏ¤Os¸\\xm¦rd¡Ø£KpuPĸÑL¶yz®I^xmnLeÒUPBTCDAFìxgp^äYRtR¬|JVoLF|®lrsĆÏ_QnH¬wêĦvª¦PSY^wgyUa\\~ËyRNÀ¡¼sWvUCpHj~qI¹|lÌVxZ¶Re´å¶F¬Qeò^frI]ďoZ¿XMrE²³èIVkj^Sàtoz´ÖgfnOfL¢¥p@cMÕiC{¨OhDh_kWN|áFB§f|ªSà÷fbA~jh¬AqÊYRoDZ³BÁuÇqa^YY·ËKiÇª¡J~HxgVpo_Çv~YqêoXÌ¡SoÏS£ZscÇ°ÓNß¡qé³@ÓrÙ±Z±QċA{QÑµ§µ¥YgeÕIÁ~H{tSm£YE×É`B­[t«{fiuyZ}z~f[f\\Vk_qyN¯kwFqogpÉT©auÍw­CudÁeJ¡iMğécęYy«sUckRLv}KSuwuwIy°|xB|@tnÄzd\\°´Lr¬ßÊRäzr°mRcµc·RMrfxQtGǍũčĝ¯§·VkkkîmBí§ŒH\\øÖjâ§}¥cRGØLPwdOOAËI¯±eHiSU`Ëb}oz¹J_±³HyShl¤ÍVsqnÉFktoGTÀÉ­dXHwhB¥­hUegCīLu©OXcWKUtÃq|ǯPď^K¤Õ^ĕ[T·i½¥oÍNKKÆue£aX¡¦QÁãÁ±ili£×MYÍ¦¹N÷géHSV÷cqqJ_[bi«_YtÕHgmhwÕkNQqdDiRF¥nCPí¯yfi]ZCat«oYy¢®fJÔ©sF_ÃM^ØMJc|nUY~}Qd~¿o`rU½[ºF¨k°µR¡pkiAko@LiKD«t¾a¢lD®fIÌeJ l®_L|ü^kmL{K{nzen^® K^[XgèÒMRT¥fhm|Z²Àà¾A|z_LK[XY¢r®®¦^} £o{dÂÖdČÌPsPb RGlpâÄ¢bÆ¦kÄJX­z{AÎĦDhtPAgBA´xzJhglqČLĄÃBcv£IrÙT³ğMd¦fJutMÔ¡h»Q^NÂ^@j}¼g`xV¦@~º°bWhLk~dU xbEx¤Ö¾cxXĄRf[ÒcĀ`¼_ }ÈL@|o¬¥¦FìV^t|­h¿½Bgb§NQc·UsxlàRâ÷a^ĥM«|¯B{Xº²`~þCZ~qFoäLVÄc´uvRiŐd®ÊP¬UttQÖKÐìIbç|qx\\ª»¨¬ÒRHZ¶U¨rBÀ«W]CSXQ"], ["@@MRD@JQ"], ["@@CWRDTX^"], ["@@PBTCDAgD"], ["@@{dPPxcKO"]],
                "encodeOffsets": [[[113711, 33966]], [[111725, 31305]], [[113713, 34000]], [[115422, 33135]], [[115634, 30481]]]
            },
            "properties": {
                "adcode": 420000,
                "name": "湖北省",
                "center": [114.298572, 30.584355],
                "centroid": [112.271301, 30.987527],
                "childrenNum": 17,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 16,
                "acroutes": [100000],
                "cp": [112.2363, 31.1572]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@×|k[­@M`¯C}`ÙFw{J}«LeOw¡Ein~dÌ}ºAnnCzxZN|§th»OgG«k»OCõùq®aÌ¸^ºĪ²QÌfÀtGÌ¼¦ĊGfAÚúrxQØ¬ZsvÝGMr}B£IiViªĂVmhldO²bElJ_¦¥Uo^HzıHç|@lx{YAcK\\ē}ÝOqnNig¡n}QtwYM¥©Éa\\uÃÃ¡ĩË[O¦Ë¤YÉQ~èCÍE¹zÅ¹KÉ§\\pmh¿]WWréSK^dIfåx[~wyBm}}tE ¬KXhúzÚqqÕWe[svJ]rnrÌ¼cdplItv\\aÈºiYy^mÒK¬x@UNKc|~ksRKLsÈ`rGmda~Ĵ°ĦmjUs`dÆcs³Ao[ÑOsdk©¡ÃDx®ăesoÉFwÅAñÌôl¤°g²jÐtSºJè@|t}°LF¬ĐØ´dUfh[^N³¡EV^^²s|gödfbxzu`ÊrD¢xÄj\\«tc_MrhqhGÒ\\~@Y¯[aZkQàej~Jt·|LrUætÐDxtxOrÑhQDY^ej°zOî Dm¦EjQCrcR lMxÖghnÖGZs¬`aj\\`IrrødUTêGøh ºMÎ¥ZNØj¤k²jäÂÂ¥RW¢bf¤vÅLLÎM¦p¾jS¸Ė\\Ö]L£Đ]ǰOr{ÄVsLXdWªPvĬKDfhV®g¦AxgGW®cÊS¿pHlsÊErmtUÎk£TgzG²´`ºIy~pÌaV_Tj fG²J°Ì B|cH×dQ~¦¨iá÷ÕG[őî¨nAlíllU¸°¨ĎĞǎŪHsRewNq¸Q¶ddnQ¯yqã QàÉq«³K[¯ycmÃs@A{{wz¯JvxxvT~LKulQdh¡KifdGnuXG}j¢R|[_¥heřTa£ªqbuÂmAe}M@Û¯{_ECkW³Hg[ånoks±TGo}Bkw§\\emVÏ¡q¹z]N»Ã·Ci³D}JisLou_VD_zfŨ@ef_sÉËíMFj¿e|«a«Y«fNėª§ìDnyøc÷FgwI¥m@{bu£Rm§yMmYZ¨Ú_^hàvUl©£}éq^WgV»h@ó³³S¹M÷tYFÏoAcïµIS³cq§JU|ÇUMcËMwkKr±N}_ByKE¢¿pmI£·sZCe}Å}CqU{EXóW¼bM¥»{Ku«s±±_§«WLqý@C¨XCuxE¶«¤RÅaĕx_y¥¦£aYeFSt¹ESÙs§H{Cu²OÉcmsHùÏQ}"], ["@@MLB@LK"]],
                "encodeOffsets": [[[114714, 25335]], [[112158, 27386]]]
            },
            "properties": {
                "adcode": 430000,
                "name": "湖南省",
                "center": [112.982279, 28.19409],
                "centroid": [111.711649, 27.629216],
                "childrenNum": 14,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 17,
                "acroutes": [100000],
                "cp": [111.5332, 27.3779]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@iEGh@ZCË}cģ¡U©«bëüQ§¬I¾[lK±µñ¹}J©Ü£Bęģ©ģI©de[W¯¿wĩIErTG¬³Hċã§CU|o­}H¯yÝonpµCga»ucd£qXw_§Z½e{ÉyGMtMNģwÉEÍaėÁOûNyS¯«­ÓoûWZ¥{JÇā¡O{GokF÷tºg¸PpMq^í_£hW°RjZÉ¨čQ©¥¿wgD«SÛD©§@õIÃgtNä±ºHtvO £^wªDi£L]Ĉe²ôQÈfŜ@ÌøøMĸ\\ZĈLÄUX×FXFÆW¼®P®A¤`zbpĎJÚ°ªq¦ZxÌE`[XGºTNt {®LYGxkRNQæ\\zxl~e¤¬¬YIi[¤r |ixP O}PBÒq®[Cph[|zQð`Cl°EPtI¸d ¼^ÈQZŠŠ`¤W|r]\\AOqbWÀfnJq|WphYtKrbÎ|E¨ÈPĀÌ^ºCAhªºPLÀxzUBöa\\tW°dP¶G|grĈP®_ZN¨IxOJp^A¢ªzrCbSvd]nÂhR~úÐtGdnPÊ±DvG|t¨TÚºFTs EZf¤b¦¥z`ĖwÆbQ¬£FµvwDWD§þ@rK¬X`¨²t²¬Lv¼|¦N»aXWôFV|rDÆ~f~DY¸t¤nJÀoF¡zLA~`²MqLxlÌNNdÈVV{¨IrdT´¶J¸BiwÊ§iW­lobxxCvØ^^c²ORhÌk xRIÂ¸}½àQ|Q£WO¤cBÑiqwTKy¯uo¥ECg·uNÕq_¯K·¯qQoēUlÊ_mXÀHxeXÇvWĘÖ°kNµOªHqf^nrjbâ~WÂ|lSvGlâØdXjRªm\\fÄ¹e^½FÆid¹ÂBj¸IGnajFYjvYbvÄbNb eCwbmfN`[ào|L¬±îE~|¡~IM¬P¤xdLnaKiEo|{LËW}pab~lYbĢjq­ÑCKxkeÄÓOgp{IpKI½pEÁ«I½p³zQIÉkSvÇ~AN«|NÃÌpNq@ÉěsFJnyPsky@AE}@Aõď`ÍpG_½^aċo]q^kQhcÇ±NÇcãggUĉïe¡x·cuD¡a¯§HOÒyrÃRnÏY{ÊCÍTē [£@zUÄgNõMN¤MBxßYo{k`YāËaoKÓUe®ĵUE¨_hNÔ^pgiõSqG©}ÄLpm±Rm _\\a¿au}jGÀÊZ¹]wo½qS\\³LS_½QYm§O±LkgCG·qbYä­®ÔOdq®±Uåpġ£goIµÃE`GHmÉmSZqmUAÙa"], ["@@JJz~[r\\q@·eWjQo^ÙHMjjm"], ["@@gGy¥bofiu¦¤¶I{Zf¸h¶Go"], ["@@HdUjvÒlF}wWv{¥ZQyO"], ["@@RhÂ^PQãs"], ["@@CT\\H°ztoÄJ`¥īW´eA³"], ["@@pvCk^"], ["@@eiÕGÅqKÈÅP¹KkĝsT¤Ä ~° Qb¾¸b"], ["@@o|NQ"], ["@@G|pAgy"], ["@@K~P_Mem"], ["@@dxLLo"], ["@@Qp¤]Q"], ["@@{V ^cs"], ["@@¦RÈI£R§{³ÇKfČx°c°ģZRl"], ["@@clZi"], ["@@TpB"], ["@@Deµ£B]¢¼Y"], ["@@|®Ni"], ["@@nv¸Bj[pÏwg©^zU"], ["@@zf§Au{EvY"], ["@@B@AA@B"], ["@@A@@@B@"]],
                "encodeOffsets": [[[116285, 22746]], [[119834, 24001]], [[115562, 22263]], [[115232, 22102]], [[116973, 22545]], [[113084, 21680]], [[115134, 22184]], [[113171, 21586]], [[116496, 22490]], [[116453, 22449]], [[115859, 22356]], [[116552, 22934]], [[116931, 22515]], [[116894, 22503]], [[119573, 21271]], [[115738, 22373]], [[113055, 21175]], [[113301, 21439]], [[113211, 20816]], [[118726, 21604]], [[118709, 21485]], [[118615, 23269]], [[118616, 23269]]]
            },
            "properties": {
                "adcode": 440000,
                "name": "广东省",
                "center": [113.280637, 23.125178],
                "centroid": [113.429919, 23.334643],
                "childrenNum": 21,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 18,
                "acroutes": [100000],
                "cp": [113.4668, 22.8076]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@~ nzA x\\}æwecJ]LêTXqX^gÀon¨[ÊLÆººyÎFDç}ÊRZÌ£P¥Ì\\¢ĪÄÄvb[ªÊN¦Zxs~R¢mjhMrmÞPĔ~[dLB |Zw@kè{ĲGGyp]¦V`¥kIFaP±kcngUāj©UJj¤~ANqÞHtu«YR×wùqBÙeH¥ĉË»sH¿eRËĩ±]¹·bË­úrDöP¼l¬ HPh¼g¨sM{wYDymmB~¹cË}jm¢FxPf¬KI~|xÚE~_°DN_®@l\\Ø{Ágm^ucTaDqy©B¡]IowPJM§`YO­ćhq{µHOcX¯[sõbAyVwK¿O©¹Bg¹DË]Oÿ§Ç{FaÍLqsZogXr{IemX¿raPB^[qX{_£şşYÇR»]·cJOs¯FDkï_R{y\\ogD­\\rAÑ~OPwOj{£q\\JjZ««£ f}kw[yRåMlQHwZ­K|Ms¹SWH_\\ËFw¥Y©r¯IÙočya£_­BO­X»ÅEåL¥ÂQw}wU{bÉ]Ɵ[¹C~£JMÊnE²y@WHIPſT³¡a`³oWpDDµg_EċĹāmËPċ£g\\²OE£ïWÕÝWyªVCvyzsU}`ăğgedy»T\\dmc¡qPMÆÈM{o`Gdn¯ÛbBxBx»sqVQÉf³GWn©H£_pnRÊo^tlztY¬enM¢č`tzyæzdEzîuÀ@ĪrfW~ª|dq^I@IACCKEWBG@A@AB@@E@AAÅ¬P`TewsdsCpkùBIiãTynXdÁÒ«TOi`ÇKs«VÅW]iÒNuzPcÙbo[§B_ĦaLa¨n²´¦eI³¾E¸¶¢PThCjspR¨eZV^z°i|¼P¸kÒ²|ehdX{ÆJhETYlSXcoL{_{beuMLzls[N¯kĀX»OħñvSn½z[n¡ohe[¹e¾ C\\wL§ØQj£|wGIÃx¿{¥Ca`Ýj©Eg`aoLWmdáYgÇ Thj[rDsĂ}b}İâÆm£Ú]tyÐbp°lŔMzZ´JE\\Z@B~vAjvVy`ÊEdÀY|¹JqÚWNTmôY¾¥¼avàGhÂn¨È~¢pCúQ«Ì ApzUªFx^Ġ~P^ÐjzJ¦J^ajnWÆ`I`¦|fcCÞqLoâJf¬ª\\E¦ĺhh|pEH¡[ÔçyyTQbfeWnµ¤VRoc¿IÄ nKºxLD³JsjWC|u{ÜSt²^ÖâEbzºR°QÈ¦^}~\\¸ySdxVXokf£®`ĨýH}wJx}ĆNºz|®Z}bDtFFX¸Mb©emwXpÂLAYº\\ÜÂbkÀÄFxdG­¡­IGtpMS\\¸X|[dz¤SW`k¸ B£ösdY|XÖhDÂuÄTp"], ["@@fV@A[YIF"], ["@@@`Hv VJuuoKNoS"]],
                "encodeOffsets": [[[112111, 26655]], [[107600, 25517]], [[111707, 21520]]]
            },
            "properties": {
                "adcode": 450000,
                "name": "广西壮族自治区",
                "center": [108.320004, 22.82402],
                "centroid": [108.7944, 23.833381],
                "childrenNum": 14,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 19,
                "acroutes": [100000],
                "cp": [108.2813, 23.6426]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@¢ĈF kz¬ÎJĜEĀr||]xÙI|ÂqÎdtU¢Ɨ|ñzœS_­Qó©Íµ¥³ko·}³œɫJW­á@ċōgTéćÓuěgm¡aē`őũoaÃCÝ³t»Huví`Ë¦ħIP}²đA½QÚqxĕtóLGânĜUÊ¹ÌDÂªOâªMðdŖÔ¤Ò\\¦¤fØ²ÄÀ²Ð¬^nU®ÔÔrHHf¤e¾GôkzÐ¸Ôp°L¤¬XQVÈA[XÂ"], ["@@VRh¥m"], ["@@x¨¼¾@È]@§Ç½«°Øa©"], ["@@uQ¥Mcr"], ["@@U`øvbÕ{¨ Õw"], ["@@NP´y¯T¦qmJÃĒgčM]\\GÄ"], ["@@ZKJu§G"], ["@@´nA~ÕAÈr~YHu@"], ["@@LçÁPiìã¯LTÒ¢"], ["@@rĞÆ¨ĮÆ´ìŬè¸bE|i^¯]{Û¥Wçáiō±ĉqÑCËm"], ["@@ZLªfyqm¬"], ["@@nBIg "], ["@@zxTxWBsÕcyd"], ["@@xM¦xsg¥yc"], ["@@IvtTi"], ["@@TAkX"], ["@@xhv»¡HK"], ["@@ExuÏM_vtT"], ["@@x~Ok­oKY"], ["@@Î~bt[sģiMo^"], ["@@Ì\\[§}Uq¢"], ["@@ÀPaAI"], ["@@ÒĖİĤÎ`ĀEökySeŭjç[¯éę·­£I@|"], ["@@vakl"], ["@@wH\\łxpyÿS"], ["@@¼ZÍE~"], ["@@ðÄPL«yg©XKl"], ["@@ČnxKIu±FÃsyFv|"], ["@@bOyÏľ`N{á¯KVKx "], ["@@ªAvW["], ["@@TNw¥FJ^"], ["@@dÂaHkw¡|"], ["@@´@`k¥Gmt"], ["@@ôzOy{Çckb"], ["@@RĆq`]{¥N¯p["], ["@@Z|D}ÇfS"], ["@@jr\\·g[]¢"], ["@@Sowg"], ["@@NZØ~X_Ûa^"], ["@@\\²ÐIMyé×[D"], ["@@DðJQïI"], ["@@pvA{»in"], ["@@hjl§NKp"], ["@@mmrfvv["], ["@@bä²JJ«§¿©X@r"], ["@@V\\ÍM_Ò"], ["@@vNNx"], ["@@OxÚXWá¹"], ["@@ÌRAki}"], ["@@VĒ`BMĳg`"], ["@@vgK}F^ "], ["@@kwKQx"], ["@@LhUyKh"], ["@@f[wmR"], ["@@BzĊb\\aħy"], ["@@nyosBa¨V"], ["@@Iioaz"], ["@@rdo¥wKv"], ["@@ Üp_¥±iI"], ["@@Jv~|AH§yh"], ["@@n¢t\\aÁiD"], ["@@ndw_"], ["@@¾ZRq±C]\\"], ["@@DXĚ_¿émW"], ["@@tWuB"], ["@@DsY"], ["@@¢\\Q¡[J"], ["@@lf\\{[Vr"], ["@@bt]A{N"], ["@@´fCLmċL"], ["@@\\~hUBn"], ["@@JzHT]yAY~"], ["@@x¾[{£eEh"], ["@@Lh{©wO¨"], ["@@rxvkomwb"], ["@@jRwN"], ["@@lVd{yKUr"], ["@@|¸YLwqeFqj"], ["@@KsaQn"], ["@@PQoy`"], ["@@vFk{Iv"], ["@@ttywm|"], ["@@vÜP¤[³Båh"], ["@@`¥Kª"], ["@@¦C[gl"], ["@@j¼fpu¯D"], ["@@dKsyP"], ["@@vB½NGz"], ["@@d¤fbeD"], ["@@^xGM³"], ["@@JnGe"], ["@@pikh"], ["@@pz|YQµ}G["], ["@@tbXAKx"], ["@@[r\\|FhmSuO"], ["@@d²WkA"], ["@@PpÌ\\[K§kP"], ["@@x^wwPI¨"], ["@@Zt¾KA@uj"], ["@@XMh"], ["@@pCb"], ["@@NváyqOªo"], ["@@L~SHk[k"], ["@@`hR`ep"], ["@@Fikif"], ["@@|\\Hw\\"], ["@@HTQ³B"], ["@@VRygW"], ["@@lBwL"], ["@@]¨cOuyP"], ["@@}fvfKs"], ["@@XÊJKoyh"], ["@@vCqF"], ["@@vh[Yj"], ["@@`B}^"], ["@@ÄdA©@Wp"], ["@@¦®`kË"], ["@@HD~"], ["@@__@"], ["@@QyIQt¦P"], ["@@Zls_"], ["@@@B@A@@@@"], ["@@Du{cx"], ["@@MwgvM"], ["@@Nxpw}@"], ["@@naSsY"], ["@@°TD»RHf"], ["@@B{Tzr"], ["@@J§gAi^"], ["@@@PClF"], ["@@zPBiQQ"], ["@@UoNXnG"], ["@@lMmyB"]],
                "encodeOffsets": [[[112749, 20508]], [[114902, 3970]], [[115985, 8321]], [[114686, 3941]], [[114139, 17488]], [[120534, 15548]], [[114936, 4038]], [[114416, 16587]], [[114329, 16647]], [[116631, 7790]], [[116713, 9086]], [[116691, 9053]], [[114662, 16716]], [[114421, 16848]], [[114910, 9080]], [[116524, 7551]], [[116936, 8976]], [[114927, 17405]], [[117443, 10594]], [[118618, 9943]], [[117369, 10205]], [[116500, 7821]], [[112092, 7521]], [[119064, 9093]], [[115176, 16386]], [[115239, 9059]], [[117217, 11097]], [[115108, 16687]], [[119285, 10646]], [[115046, 17318]], [[114177, 16847]], [[118273, 10136]], [[117422, 8408]], [[117257, 8315]], [[117932, 8588]], [[116629, 8198]], [[118207, 9619]], [[119253, 9395]], [[116366, 9193]], [[117450, 11269]], [[117371, 11707]], [[117669, 11125]], [[114251, 16866]], [[116674, 9089]], [[112575, 8037]], [[119529, 11778]], [[114372, 16986]], [[115208, 16862]], [[114444, 16448]], [[116579, 10260]], [[117547, 8357]], [[119355, 9980]], [[118050, 10437]], [[119637, 10729]], [[117457, 16559]], [[118761, 9546]], [[116389, 9453]], [[117418, 7773]], [[117241, 10975]], [[120598, 11032]], [[116985, 10488]], [[117442, 11745]], [[119438, 10757]], [[113111, 8312]], [[114139, 8730]], [[118025, 8714]], [[115940, 8268]], [[116813, 11192]], [[120073, 10569]], [[116954, 16426]], [[113264, 8204]], [[118282, 8695]], [[114217, 7726]], [[114338, 8882]], [[113112, 7988]], [[115043, 9141]], [[119265, 10046]], [[114612, 8265]], [[117205, 15974]], [[117745, 11345]], [[116845, 16389]], [[118831, 10338]], [[120082, 10949]], [[117611, 7419]], [[115532, 9125]], [[114351, 7835]], [[114901, 9048]], [[115229, 5934]], [[117350, 9059]], [[117626, 8176]], [[115656, 8613]], [[116327, 7130]], [[119496, 16738]], [[120165, 10333]], [[115706, 19940]], [[117195, 16419]], [[116565, 19619]], [[115355, 5230]], [[114319, 8098]], [[114939, 9088]], [[115602, 8033]], [[115286, 5696]], [[115224, 5793]], [[118131, 14284]], [[116324, 10487]], [[116594, 15849]], [[115617, 5113]], [[115259, 5232]], [[115047, 5757]], [[114920, 17162]], [[114928, 16073]], [[115315, 5497]], [[115172, 5878]], [[115935, 6458]], [[118941, 9810]], [[117708, 7689]], [[114232, 7996]], [[116674, 16216]], [[117685, 16422]], [[119552, 9275]], [[115351, 16779]], [[113873, 20404]], [[118537, 10713]], [[120027, 10993]], [[115376, 16724]], [[118562, 10795]], [[115213, 9774]], [[117361, 16026]], [[120115, 11344]], [[120516, 11315]], [[116907, 9610]], [[117469, 9971]], [[115256, 6122]]]
            },
            "properties": {
                "adcode": 460000,
                "name": "海南省",
                "center": [110.33119, 20.031971],
                "centroid": [109.754859, 19.189767],
                "childrenNum": 19,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 20,
                "acroutes": [100000],
                "cp": [109.9512, 19.2041]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@x`~ÈB°Kmhz·¸`seE}jkYQ¤fO¹³NmdQHnHnqvb|{ppoJsRcÌavÕA]Oh­JLWCp¤_f­DvdWb«]FfÔQl^|Nº¶[J¢UPØzfĆF¨kF]zOd~rGU|RFr¹n@HCDKBlz»K`vTJèDhrpJk¦CKÐhLRjs°KöD¼}AjgXÑ¬xVHZGVxW^h¬EvXX®¸Y B^fªm~{UA@@@@@@@j¥{IzUAr]P®S\\Xfr_ªOXLD£N@EB@FFvjG~nGĲľ¬Ð¨¤|è®X_\\¸¨ hg~_|b¾MÊw¢° RlkFpFÂwĘútTIÐIj´vTc¢bNÂôYx]N´^úÌÀP®FAr`lQö\\Iv LH ¬tD¨|x@zS|pÓpOsIjIrNëĚ¢~udd`czR¶_n|«´iNB@Uf|læW~hoKüÍ´Hdw¦QÄ¯îIĊ§ÊJäeHmscz_AuČWÄd´M \\G]¼R¢gNÓvseIc¥ĠN´ÚSqJ¤duÄAăKrċhkgIwyB³hABOgsCÍĥBy|W®ÃI¥lÅ¡aáÃoHkQaOOtċËcÁÕcp|¤]~­¥­¡qDJIRBBHJ@tLKy`{Bß½±¿{Ygne¦SQNçÑWh\\]L]­fmy|m|LnKl]{û`Kk­fIJËeC­¡kb½¬sCjLKp@Bljol¢¶Ql¯E§\\¹¾V_qÀp}c~RZ}Vmd{IN]×ÄN`EtªIÓe­z¡pZ¬bsRÒgPqswCwsÏVåKq¸{Is}fißRlbY°\\Z@gG­CÉÓ}j_e¹kµÙxMxyFi£^W®nlÜoTjr¨QgIai¤PkVs±SfGlBzoxYÊRKª~»ÕmAU¿Pę^¶BZMXY¨sdkìPyZk§ÁeáčMcssA_µp\\¦^vú½¼£·l­Da]eÌë|eNfS]Ev¥_`zaw{ÁCWÇe]}wVQbfDX~ÃhŁKFiUJÙQy§wHkqÇpLmÑAomwgjQYj§aUvÅvÉeF¢tQ~|enHfAp{BuxBóÜi_P±~gÃu_SÏsIy[Õ{"], ["@@C@MA\\@sGIAA"], ["@@ONLADC@G"], ["@@NQCIWZNB"], ["@@EEA@@FH@"]],
                "encodeOffsets": [[[108928, 29211]], [[111720, 31314]], [[108117, 30847]], [[111718, 31314]], [[109628, 30765]]]
            },
            "properties": {
                "adcode": 500000,
                "name": "重庆市",
                "center": [106.504962, 29.533155],
                "centroid": [107.8839, 30.067297],
                "childrenNum": 38,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 21,
                "acroutes": [100000],
                "cp": [107.7539, 30.1904]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@BnÔaĐPHmĊPkÎvĬJ®îYxeĄPt¯ÔQXk`hg®CĬÔK¢Z|aT]ø²|K«d¯È«~ozpR fqCÕl|gXz¢Kæë|JzÜÊB\\ŉâc|ZÃÎQ´y@O¡¢XrwvFîhDf¡­òvXxm²Vrÿ¸eSwrŝÈ¹JaZ³BWjÃL}PëªQxÃPQb©b¹¦LTÄN¦a¶yTx¼ÀhðZqnrsÀ}RXU~¼º¼^Ö®HàÌáp¥zÕJ°X´ÕJphÜa JvanCrvLEÆCrfQäxxU~M¦øĐnrN`\\RöD²eØËÎ@¼_¢mªAðV²QEqZssTcxqzJ|©BwtJjw]z£SJw~]I~s¢gbsMÑiÿMD§°ËÂGHaaVZÆ]ÒUfjSXµnîNn^ÜĘm¥¨BN_®OdN²r¶wrb_Bvª@ªÐ·RèeQ@¸·Mnß§¯l{äSfolBx æoºiµ~h@ ¿z¿¶awXjHÎXZeDkäÂJ¬arlL l oFÆÄ^Ċ[­bTI°KYvZ^C~t\\­ĂRv`vYâLìğZJO¦bdîDxsÚÇzOv²¨vÈµdyt\\¾¦ÖlRàQJ^f¢CZ¢qn@µaySÍě@iºX{_Åald\\¸Z¾S^@nx¾z]`gbrsøvX¼H\\_¸^rO°¦^IAª]Výºx¼µMy|«FdOįĔd¶gnpQ|`|q D^¾~°]\\ĔZeN³ªdZxL¨Bf¸CF~ªXizGi T¢YriE£¶¥[SzDTVkEbywçXYÀWlhWKyÚ}äT~¤®JxósMXz|b¬OnmnPòìpĲWÈ`´mÖÃk³tÍuNª[j¯æR ey«d}WjJnÅx¥Ñ°CqaI[³FWdÉÎYĂ×®J^s²KTu¨®X²PthrQ«NĐªYØp~hH|[H¦tl~äjLwdÈ]tvTN¬PeG|uT³jHRÍlHV}èx¦RVchD°rMjYpgxlIi»AI¢°mæGZiN QS~ UhhÊhKZÂ¦GTo~Mf¤ERaČb°YMmR¡w· »À[nªup°vbt®UFÃlWGPÐ|¦DavÅN¸ù¬tZc²§MÌl´[\\hpc¼®ÐârU²fsF}gåX{kVeA@jM¬³m{µ`yQd_ccv¡}ìęMJqitJPÔo{oTyw@§{sC«GKJuõ[kR_BqEO­¿ùË³]M^ZwÁóaMd¡S³uiJJÏ SsėùÁxoEEklQ¡¯Éx½Na`{}hg·§`[W­{ç§£Ï«ıĽmHH}uiG@M¤ADABAAC@@BC@BIW©Pq`We[­TOq^ByVJ|i¦@@@@@@B@|V}©n]eA·ZW­uW«F]gwXUHGC@G@MwU« WÒhBi»~õC¯LitQKgLÏ¥DlIogqçCCBEDIO_u¼LkyPMºmEqQV{Hq}Pcy^lE§ąEyeO×¡VIµ\\¹M]{kRÓEe¬^Xauc®C`eo£DXK®IPg^ÖBbu dËQtpIoo|a{ruGmGmRnc´MºPeR£lZ~i Ftf_¸·gynLA¯Ç_}wJ}KYDÏ¤[o\\Mc¯Z{¤dyÙ¡_KÙÛJoVwiYv}iDS¯¹_UáOVË_¦WPvJpx{p§c{ß¤pİ°ª@¾y¼Éi¯I¯i_Eh@Z}¥Ã¥YÓt³E}F³gIb±[gsãVYEk±@ce¤J©¤ËNïwcPF¸gr`­buÌª[¼oZ{eJethed£@µt¹kAKÑ·^o}q]BaedÉk}sPc£¤aU·¦£p¾¯pG^Î@x¢nG¤VI|Rh~Yz{@wlOJ{ww¼\\ĄOÂH^hHPz«nµbqzks»P«Qk}pęu~kW¢c¿Jcqk¢ÃAi³Mur£}µ©DS¡xÑ{¿¿ßzovZ~Ë\\©ËNÉk¡u_ËÏoAi}³MÑ«PÕE}»oqZÇ£ó_eAj}TÿěrsBõ¬ÍdIt¿OQr³Ej]TěbC@kyEAÍTméC[v·¡M}}·§V·|´S~·tyqđ¡G©ēEkÉowG¹ÇWsl{M¥mEJXZ¨n¹a°Vp`jxsVFÓÆZo¡Gw¼NZ¸D@hyh¼ÚfiYZmTcC~yfÎ¯f@G¬HDnýlÒYRtÒEp¡T¡[{xa¤G¾ÏĂ]_XÊµĒwOj´ÅhM¨ex¥X¶ÄOs³Á¥fMr½^}§¿»m_HMÄgdpr@~ĉb~vzÛêTÎ¤ZzT|YXj¨N|rãfb¶ë¨I¬ÇÎZCjGBF²Gö§J_J½{kR­GE}»EM±~kUáhoħËa¸©O{`ºn^J°kÒ\\n¬k´PgUÜh¢R¸eľHzY¾R¸"], ["@@GY@N@HHD"], ["@@KCAJD@@AD@BBBABC"], ["@@SIJPFCDA"]],
                "encodeOffsets": [[[101493, 29923]], [[108815, 30935]], [[109550, 30808]], [[108095, 30909]]]
            },
            "properties": {
                "adcode": 510000,
                "name": "四川省",
                "center": [104.065735, 30.659462],
                "centroid": [102.693453, 30.674545],
                "childrenNum": 21,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 22,
                "acroutes": [100000],
                "cp": [102.9199, 30.1904]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@[}HÑrggNqd`¬si[wÃC¡q_Évyawechõt{]±U]¢F´]M\\gVe³cď×E«¯Ks~@{ç¹ITÏsi±h£¯ókòËÆBExÊtpĄfw­ÄCª¢ltcÒPp\\´BtdcÅ_Vtniĥĳ¯b}^}RCVÍ@«wÑLnz]jZ¹bÇu[Jsokdc»qËqm^Ituf\\ÖXrryÙùgW«LF~sSoÃvÁgCWÕZ{cõtA¤·_lX£Tcy{\\·WT[oNsH®J®¢HcEwÃl¿aÁÛ¹[BZÁKWoxfnaª·NWEsEC~a­Yy{M¹~ąIwxG~ħþ­_e¤lWpUwcT·z}[~¥]RÇQ¯y¹aáFÕ±]sÛTv|{DiXItC´wK¹mLÃJdÀQp£Um¶XfaeRSzzÓè\\G¢oFg{ĹgF¥©[e«IpárKDÝd{e_¥JÅ_mXib]I¥IyÏiO]ğ}w]©EVoyB¬ËRùoD¡Ç}m§Ág ßHu»b½¦óZSnMÙXIr{º¿ZcÉF_zUiuuB}eUY³Nyœko¯ÏaszÙ^¤ÅnZrE¶¢¸¢z¼¦y¸ÅNÆdVOz|f¤§jN_®hXUvãLz¥AL¾}P£oC\\ľDB]oaxdlO°h³Hm¤fĦ}xtæfvwrdèSÜ]|Sª|¾Kv¦ÄÊdrgjBdNvyHRmlËU{pRÆsoÅOjM_F½vQ­Ã@·¹G¯TóQdGn«]VÆ\\x¡vgªb´¶paXkZk²w~{F«Bzmv\\d[MxFZrÂLªì¬A^ÆbR¦zbDx¸re¸HDÊ­|PºÙKA¢Z²¼Ĕ­|@ñHqŤbw®iIhQĆ¬¶¬@ÂsCs¨ÌB¬vtwp¢|OhXÖðxÌMª£If£d²@FlZäUht²\\Ja´hE~´FÔs¦ZÄ~¦Yg@Fj`°Jj°»Ê½z©@į¯£o|àdo¨|owuIOX¥`UÌPVâº`T°jC~ZuxjpUÜILÚ¢`zÚc|£°YdNp[\\Ð£CZ~LI|Öz\\tJTÐv`Ä}hO²j`ôÛAvw|ABoeGfm}{R¡sEÊfÆuVubi¨ZRixhnpBnÒoKÈlrxG¨zRIÚVEjłLÄgW}CaeRxU^~ÈfXD|Âxyb_`u¦F^eTM f{ìfËb^®Ck¤¸¾»uù][¥¶o`tBdtĎN âfÂl¨zYOlëtcZ§WNYA]µĚÀOBVÖn¼}L©QZÉpwAykHe²TUtOl£bjJRh§qipSkÛmX­]¤jzENwÚwl¶º`fi~ÔDÊ®Hh"], ["@@ncH_qtÇA@VUÎQD]~"], ["@@tQl{}d"]],
                "encodeOffsets": [[[111897, 29179]], [[112080, 27507]], [[112158, 27386]]]
            },
            "properties": {
                "adcode": 520000,
                "name": "贵州省",
                "center": [106.713478, 26.578343],
                "centroid": [106.880455, 26.826368],
                "childrenNum": 9,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 23,
                "acroutes": [100000],
                "cp": [106.6113, 26.9385]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@WÕPg¡{oxusA«§ËDtÁt«@µą«gRJj­axţrGò{@ē®±»Y¡BL¹Ú{OÉ®C·Gqfw·CyaQ¥ÅaB]«©ëÁKYqENw\\[cnuAy¬|Ex}l±lYWbµoa³h©¢u[wUÅ^¬HmcôR°SºH@¸®ÄR¾uEN`iPÆtpÅQ|oÌVnkQzGMucAhiqÉc¥ÃLu{½T©{^TÛçqcxeusåw~eĥn£´GgP¯ckbw^pAC[ĽpD¤~OK½¦ByäKVugW`­iM£¨{ePyUÅcÆMz·¥y»¡¡·FµYqá~į~atāC\\qgiSÈZhcâXnKbph_ªFÞib_¦DÀ|ÄwJxH¤{Ri¨×xK[Df½º\\gf¢p\\m¾yTmòuĨ¼PWlÿ°Mt\\kKyNfva`|K|dpWTZkSFIg|ÅWgcf±{lÑO·{»j¯]yUY§foQitDgS¡O·µ½F´J¥f³±mb§f³ø{QeyzÅÓm­±^¹{\\őÓUp}WOÏ[bß»]×WwSJuÁQß|Ë{Û©§Rad®W^_ęcwC§këYc@µ_ÑÀeBWf·ÔoTEXćð×āZ§ÕiP©¶kJ²Å«ZC}K­¿qHµnģÏT§Y±HªW¬³oEģâW¥}e§WmÁ«ij£¡ÇSÇą\\ùV[íxËÏTK«JB|¥¦¹yEq×py÷»[c}¤ÝN{{a¬ği¼JCkJ}Wqēj[XÙzFjwo§NBdq}PÕgÓ`WB¡H{»½C¤ÇmcfZËhýs©Ać¡Ë²rCv»Úª`C¤t]TA¢¿Fn~aâlI°XvD×ÇÝ[CBSCCuUos]_mMħ¹©hYØóG§§¿W{kNalO¼_j¾àFµ¡İbðlZf®Nč\\CęÇ@¡ÉDEI_^Y{zñyG»ZÙDÁ¤FYpzfC¦u fîèmvŘq|X\\¸VbÄ¾dwÎVjîz{aVº¥dG»j|ÇyuoËnå[µzT¦±Gătcp´P}lC¤QÆ¶£[kÐb@rZUªqhZp°õFub_Ê^w\\xjvU ªFôØe¬smNċKwL©s¢¹IKAĕQ]Ļ^o_ÃKMBC@wMIAăW_çaKJ­]RUSyRMrknùDb²nRºH@~jZJBLFuhD³@C®hSªça·Nt¢`ĦAĘm~nxèrzîGnW~±[ÎXÆOpC¬ÞĬ[zAÊÄ@fÀ\\~BMjÜu¬\\vgªÞYÊÃXpÚxPÐ¢fHª`ªÄtJòbzeÒ¥oGWðuÄ´xpKJ«ºOzp|mRRÌ¬bÖSRb¸GÊhfRgP|qNbĒªvxqľ|`H­tDÄeÒxTK¦dbLG¨_ZdgllÎWeÉHH`¸es»\\[WAĕ©MiVMÄuÒ¥eĶe¤TSxĢklI¢N¦|Ôq`Bzþtb¹rM¿hgA¥S|SÆÈcrÀzCºKx¡êe¢£VMhfĬÔdxÞ`vqªZ`¢f Y°zKÝLċtoºFTn¨RB³nRüò¶kÎqnKh_ZfÜ\\Q·Z½GyfĽQ·g¡VÛhOl³«[mlÑI¯m]¹|_Pªb·ÌĨgpâlV}N²¼FF~HQ®l¾|I`¨IHõ±EAHDiYÈÍJ«ì§aµäeq{§MWi{ZySY£ÍSÜéuy}Ċa@}oqhcNÃ`GnÀ¼~¨¾]NqeÂ¦t´ PÃWµ¦fwN§Ægi³xP¶đWÉ`^ÐāH½b£|w¢\\¢SFosÑZQkÑþCmGH«@°eÍzeD} dnSYjZ e»Ùzgg@·CMYx»¢HpYÔÅEtUiw_Uo¯ºb m§YWInF¦|NtkÈXºxHpÊFlĔª¢HĒzr¸sT}³¸{¨U~¸~¢N¸\\uêDnSBÎFlz@aDSĜi^Fq´PRsÀcJ«ÎAöqtĜSĀi~B`fô¤ÈrY¼pF~ Ö¬ONÒ´j~pBÌÐv`l¢MÊªÌ[}ÌuYypàÀÀÒ|¢wTC¶ª¤~qNv´Bj¡ÄlrIddÀ¡lX}Ěvol~¬R¼Oltrya¶¬mOyGg]ÁGP[ăx»|xIPxk|@Zyg}QJ{UH£¡mwÍ@H]°o½¤o¸¥bV¤£dtO~ÊlfcbA^~r]pÒ¸LlBº¶s¤@fcgfsI|fpY\\»©vË®a_hqE·dO"],
                "encodeOffsets": [[107836, 28370]]
            },
            "properties": {
                "adcode": 530000,
                "name": "云南省",
                "center": [102.712251, 25.040609],
                "centroid": [101.485106, 25.008643],
                "childrenNum": 16,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 24,
                "acroutes": [100000],
                "cp": [101.8652, 25.1807]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@mCé«ŋaµnYw~sM×¾[Æ}IaÖDU¬BÒZp[£`smBõm]¡[gBYjjLrqu]­©uRY{ùmh}kmgfS¦ã¼_\\]E}ĳfüM_dgKrCz¯[u­ÉWMÑpe¨[k­sRÿGiqluUPZ}kÿwe{DEyN³BkQ¦¹F}YZsÂ±FÀ»MJcÜ]Emx_qÛxµÔ{LfeĦmv[ðĩ~}gîJÔÄ£ÞLÂyäNfvÖIa\\Ü\\vEA¦¸MÆºQhzmæqjoÊi wLfJ¸ñÂRhÂAvºgled[Y´°~YXv°a¤^reìYNRºgVfÐmmTÈlIvhEHÝfVÒPbt]|NjMP~S vªC\\©rA`wĐ ¤ÐN|_Î[~V EªlfsªWfnM{jh¾®B]Dd²\\lQpÎzRGxÂEÌppyČµr½tGhoRp³WfÎwdeNRÔBÄVT_Ë_ąUaviĐNrxAC~ýªDBzFq^ăyu·KP}UCk¦āpMUx®`ŪÇ~Ol¬æî@J{ÜÉÐe\\_Pé¨G^¤pTN}Rb«vJºhLXsxDrUĎ@f×z£u¦i¤¢tb~´WXp¦lÔvKTbrmRU¶iXĒKKd¢yrn}ÐhngĊGWfnvYhlvdf¦J]jjTMĦnR¦}pTvĖ\\ ¼­ZCztlbc|V^qLŊg\\\\ GÄKXi´AbYºIŞÇxqfTĀ·Uqn±Wwuñ®¢CegEíuxWq ¢¡Pz@R³ÄÍYd{ŊáA[ÛÉIy{åì¡LyWhk{ÖDreQopy¬}°Ç¬cL±{^÷bSY{L¡ÓDīh­_glWR°ÓOsfăZwíI­uīlÍOnĉOGbďÓAmÛ[Ye`gLrmlÍñµQû´mA§QSm¹EspKČÞyL¯Ze¡Y_r©_uÝcwÓīeNg¤Uf¡¢éLwD¹¿yqÇdÅ{TTB¦ghNÀq aºýsAyr_Ó¥{¡MJkrM|No_sxXĥĠA{@¢lCÎ§°§Xav¡[\\gm_]H|g£qO|icG¡EZS¥uc\\w^c°RFeM¿\\q½Ek¥kíãÅID[ÒK¬Åp·S`sÕviQ±W~í¨QÜf}cFs@Ílmôç]ăAoeïH«yBOsfCs¡JÅiũÑùkgseÍqmßȁċ©WÉ½¥¥[±}µ]¿ŕ­LaHUÙF³×ß÷éñÏķŗMĹskÏSķ¹µc˭ķu½Hş~ęgķ¬JćU«iûeĳUómõ]`Ę£æXc°LºznT¢jvR»Ĳ®W~ÁUětïwJ±DiddizRpªhØ®ÇBb¶DM¹`Å~HsŽ²·óf­i]N¡óX»V]dÅMnGt»Zpġ±kp±dcf«CazÏÄÅQbovFk£}\\eatv×MáhU·uĩQÃÕ}C£¯eÁËýãw³©­Ļ­Em¯[Ç}¨É}¯ÙSé¬}XR¬eD®{E{xu¾`®wH~CjOÎtoØe@EîX¡¦ó@qg±OU±³ZyMsTē¡Wzq^bs[ij­b¯c©tĕfI§³·NDnÓccķJH·FfKku¯J¯nÐčRQ~TivSÑjXgh£ZS]m@UzJU±iEq¡DSuGklërvEsĢdPÚ§«WyHGÓāÑm©L«~~ áÎC¤wnc¢¿pŨFû¥{Bå¿LW{rß_¿´{_Çj`iìª|ªKXj{ÍC½¿[síBgë×nB}Ted¿^×W|Uº{JFtÉZSO¿KM¼jæof}GC^`I¼v`J|Ó@[ ÃV¥K_WV»{}@iÓI»W¹Ne|yC³àyL[ wzOºDµä¥HQÄ¥|«IInLeÝÀQeÁ_¯A[|RaÅHãYhd¡Î¿OotbenDmSÃËGJ®rle`wvHª^ty[N}a]WÉzħZnÿcbS¹½XPWatquSK§x[k[\\kk{G·¥ÇHr·UyRi}MÿV^s^E¨°Gl¿AoÿfćþwD·¡J]·XajÓJ»FhÑyċ{¶r]¬L»zXkl±GÝðyH½Oo¿}ÐáSEgVYb£ėikªo`ío£bÒpÉÀKt~eMoÁX°Js@V°Z®XtQM³Ģ©VØ|Mj³ĉD|ç¾agÊ@dr¾wFxsn^²Êz~Ú^ft¸RVpO zVl²p@£klëzÀ}ÈÀLWl V²jVf¾LjQuz¨s¦§LZ¾Uz¬§l¢oĘp¢SfbxXdng²­Ve«P¼ÙÔ\\Î@yNlô´k¶PS°LyRVÀOfã~J´ÚFÆ¢vW¦g^Z`´dfpôKhlT\\ªzlQözdeÀMj¬N]ÔhÎNlgĂIpvMÆPº¤c|ðgzZQ¢¦ökz\\MNNNczh¨WZUĦèM|vĖJāòf¶®B¶¾XÐsdZ[f´_{CsÒIìV¦k~NgÀ@opzFBnnJJkk¦Bx HhnzO¦dng°CN_´RƢB¨vÊR¦YØZxCbpzoÜJtA^bàztdPzvE|^lª[´J²JaPèapeä¢z`làBl]ÔMUtS©vÁÎmju¨SÖz|a¬GÔaD®kFBm¶Tp_°tĞDXOôZjĎhÒmfbhglØn¸Tú¬|NnwÄ\\´r¸NÜlrEÎĺ¢¬\\lx¸`þSŀÐ­Ūg  XâjĶxrMÌZKðÌdGF~lÀnHvcdLÈ¼VzàC¾^¼_blÊIĎn  ø@xRpDZf¬t²Y^À[ZzpĊT²`xpOZ_T±ĎW¦dĤtU¸bZMæR`r|pOðJO¤tIfjDêWQf®G¼RxØ^LÈkÜÙdAh ^I²b¤Go UruÔL¼ÁJQĬÝĔqjaĆa"],
                "encodeOffsets": [[91865, 36960]]
            },
            "properties": {
                "adcode": 540000,
                "name": "西藏自治区",
                "center": [91.132212, 29.660361],
                "centroid": [88.388277, 31.56375],
                "childrenNum": 7,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 25,
                "acroutes": [100000],
                "cp": [88.7695, 31.6846]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@YQ[WwëÐ~±©oGXÌuGNiÂ_jaymWGáZ¨ÍKyYB_kr¨B¦g|C^Ow°©ös}ArµICAILE}|»@ÙqA§µVYGÑQ§«©¼w[{raèJÏëÕLsRs«VÉO­ŏcjuQ³vÃdUãKpE}rYýD_}¹±|W°A¬{ĦNb]øQákßtw¸VRd¨Mha¾AÀ®g{]sUEë¦¥«{p@KÇ~»`ÿ_Ñde\\ăQWdw½£ÕFwwaVc}lKXga¯}¹@¥Uwh_~»@i]MÁH[³NÃcċXBvy`tdGnãfIÉĉ¨íJÃ°¥Rxc³GûÎLpEt±eqVáÏ»­od[g³\\ËkN±¨dsY«·úMuÆb¥CÏ{OHkXEÄ­Vsauo¯©vm¿\\¼x¸Q¢Nn¯ZċaQb£Fe}NSp¥HÁYLÉgggV}TRMYjåH¯n¡JB@HG@j¼kJwhoZiqNC¯gUd¥QçwU~kGQÎiGS´{vHzPYr}¢Ff`âVúW²°R¤WpjWuAoE¦¡¯EÁpOj\\D°ĲEV~MV|l^ÜEN[Sâo¨dÆ¤cr¾BTãìgÀI²Â©ZL¨w~aQcÂ¾C®G¤¸Jtwäura~°¦WZwNha|Zp]válwÂ«VB\\·hķ[N¦wVĘÄªQ{^z~XfArsºLy`ÄQTnxlh²LeúVHfņiÂ^¤wBlÐKN~wKv§ÂW¨ÂDha`°aÌMº²Ih{`ÈFĎtjjat@GF´W¢}¦v^ZÐTPĄviþNUcČPvätQf´X¤bińI¸~UIvlÂsîhMhá¤kĀ` Kày¢f`~|¸EP|~M~ÞÇĬGĖTv¤±J«JyioB©aw^qßSalNK|frsAÇÏp[xem¹ lRaÉwDuvM|bĉtshiS©y]§d§OM±ĥC{ju[eÈE|E aXzvuxDve|Tª_ tČBÀpÌEgt¦F¾¬LChM¸n^¸ÒXz^l_t|\\Sjp¤ĢiiĈiV«YwXe~Fâ}º`XdT QPaĸRÀ|¢ZĄÒdj^¶@\\bMÄ`fQöN¾z°{ºD¬V±TRNf¨BgfĕÂs¬[hĀvF¤Ø läÎ°q|VÄfÀÊ¨yÚ¦¢ÖZg\\ºb¶¤eFyÊ¨÷ªzº¹âHÌĞØmsJUxlú^ańąJ¢inN~|_ÜN|NòĚl^ÊT¸ìNzdeK@sqJBUsSGEq~ZMqpkEL[±ùTcuQ±Skey~Nkm\\iû¥§B}¡flKY»UH³[\\eY×[¹AqUWçGegV»eNíhmIÒðō²i^MSoÌqf}}URpqgWÃgqă][¿XY¬UaX}yKSs½Í±£BoweRe\\Cg_ÑS¢ucbM_Q©XOkel¤Ou^É}boEwÇ^i@·ckS¿l÷pBrk]q^{KCBlLĉÍi}k¿y­ćyïÙÛH[YRÁ«Ň·½¿`ûGÁYÁveìS"], ["@@@SKFBJJD"], ["@@BJH@@GIA"]],
                "encodeOffsets": [[[113029, 35432]], [[113692, 34282]], [[108618, 33545]]]
            },
            "properties": {
                "adcode": 610000,
                "name": "陕西省",
                "center": [108.948024, 34.263161],
                "centroid": [108.887114, 35.263661],
                "childrenNum": 10,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 26,
                "acroutes": [100000],
                "cp": [109.5996, 35.6396]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@¼BzWtbZ{|MZjÚ@²_Z¢KDzW~¦ÝÞÀzAClQgpZ®bvrJp³]zsnqcBrN[~]õcZxPZÆe{vD·ªsBOzzkLj gjvi HA¶HUfKNä¨wc~~ÊiStc[O«pQ°@z¢KHhbk¢ÀXP´q^hQlmnlF_ÔlXMþD@Äsf¢R¬FbFF{fÇv\\|iĦD²N¨P¨cz^ªjTtgĊsaN{vuCÊxbkQºfn\\wÐoÈtBeqL{MbkàTrx]bªAjpIz¬²I£SuHĕÈī}ÝN{}O·F}{_ez¡Lß_lÿâ£NggtíkÁJuV·}ŃJaj£³WeRãsuċOVdýMujăOÏS]Yu~¥X¡³HE@bsiičsÇE_g|±J¹ËN¯b_gbÁC§ÁXu¨L}xM ÏLkA£xÁ]ŅjGeùUfKg±wkSmRÃz_Kt¹qBe}W]y|©RėÃxUM¥ĸ\\¸gA[U¬xÁâku^o{YgbMYx¥X}¯bvqxãs·IH£D­Á½d Rb}xK§ªYÁJ±¿ëhSä½Aq£dÅ§cápT\\MÛF]{kUNU}ıF¯C[PiÂo°F¢F¥pvBXiXoQ£±¯XùáUe_¡Eq~ZyOf«OMuS^sÇxcKãik}¥sG\\G{}g×o©ZďM¬qRsg±O­W§Sv±L]t­IāØÍZcÊX´E\\Jbr¯DÒw¦mÆIi~X¬czfåQi°©\\MvsÎl´ÕÄ³nÇ_ıXëoñmOmn«P{aWyNtwô­I}£ãSÙ~LzXkg¿XWZxèazFUlSyCT¦\\µF¤qj¡ZSjH yj©WE}·De§AKYw©c´MfēY[^}¯]½C{r{_RmoµhcİēPc¬Ez{¶Nw»¹þU^B©]J¯¥qP·][`G»uWt÷aqh_y^w½@m]½T·Y[ckb`ÆW|¹@jĜTÎzb@¶mrY¡¡D]ei}UăPUÀJ A|ézÕmGqUçZÇzea©SVt]plJ¨BlċhyGy°zP^¯ S kLÈpÌUZp´ `v²PQÊ©NäQ``UKwg´UDoH¢iÄQVobè®Ë|R^fExrR¢M`znmpH´qV¶Kx|cx¤TLÆèkæ¦SnZ­ª¦[¦_GûDwVckJ]EìLŊMÎvêWin ÜzrGflDNnQp^¶´^´Jz·fjVL|}nL¸lTĀqxSf¼øJzIŀg¢­GdlÀ^ªBiH kÊ|pJ¤|YĈI~_T|WÊ|ÎivbnH¥¸nPbBlÀLdf`Hpđs§@S\\FBOhC@µĞlpzgzN¡~T^J­{ºXxvI¬zOåî©bu¦Ruv£\\²¨cºĂv¸IØkCLtGpnR^¹fÏDlē|g©xmEzÂ{É\\rW©FÕemSqōVjÓÖPûÛiï×VlMn|WvsIħÎWo\\KzGh~qh«VÕä^ąZoo¥Jyrb_owTOw[ßZP{¨keÚÝh¥wImvUqjÒsÓvKGpÍ³TSlkA£Lő¤ËJÉgt¯p³¢wÆ§O¾h[Ï¢ÍnåÄÓFr~­tđV£razËrAjÕBY{s[¥£aXc{µtÍE{pHjJazÉV[NU{L×Ù­o|fgrőŃm ćÛr³|}MqxEÿzãNåCV±U¦±W³Pqu½D¡TKZnK[«¤}UeR¹āín{f«R^s}qgo×BkqSÑÇZ£bUTÇǝ¢íA}ÁVk£_Wl}eħ[·Ë|MnE_´½X«nglW¿£oHÉ¡}ho]hUýf³_{xiEqªZet¥]w`ÑX÷_oi¡QşD÷ckc\\@¼afşˌ÷EʵkSÇJí~ujc\\\\ĪJ@¥@ė´ɳQƯgj·PhĸbV¬wfÑÅGv¥SmičCęwħD³W}@k£GjAk¦IúlŮĢĨŪ¤Ť¶ǲ¨ʈĢƂ\\æPƲӠÚɈb¼ňUðĊĖĐŌƤź̎ȨǺ¸æ¬¤Ĝ¨NČtJzaIq¬å¬¡à¸¦¨vńÜî|ĒTZ®DŦ´´|¾¦jD¿ĄĐÊřĠDvp¾ñnN¼¢xÀhȂĖ̚|ȎAǤǖ˳ňǵźɍǌˣȝƯ`ɲɭÌÏƜą[Æ£êiV̋ʄĠµÌĊvjåcJ®aǎÞ´õ¼cp¢BĢ͢UĜðˀoÒC¨İůXSLĉÕÝ@ɛƋß©£yñï§÷KƳãO\\eWzUǠZŲyê×®aèWô¯ĺcÂßYtÁİo´ICãĞ[ĎdŔB@ǥlýL£ovxºoP¹ŰzĤ}ßJþ[LqgruæYŴ§µÔĔ}ĆÖÌÚŐè{\\ùæy^ýöÎnĠ`\\Ȑ¢àĊpŀÓWɤ§ļiłþ°nÒ¤îÊîlƔŒľĒIŔaËu¯ľŗÝaL¯oŇ¥ŵǵϋȫ¤©ÓvĽƓÉK©ƩȄÁ°gƄŋ¾źěĀ·°J¤bX[ÈHÖxVk¨El\\ƆweªWmwuPq±âNºâRp[v»iB¦Iyh`ÐuCj«M¥ÆFwpgNkkTEY¯Sc{tKy^oS|}Z@­YF»t|QjyasBfUÇq¹Fs{½gûtÇ¢ewYV©x~jGFt_rĪWÒa´OeuaxwsSmaF`Tël¦NİyLsrJBSųEĜt~h]dRCIDQBCIWJ_VB|¹dpy@H§àÿuJ D´|¬DªgL~q@qhªfGeÎs¶L@LFDD"], ["@@XMcQKAT"], ["@@MjD@PgEA"], ["@@VuUAI`JX"], ["@@\\JCCKEK@"]],
                "encodeOffsets": [[[109063, 36596]], [[108593, 36351]], [[105305, 37218]], [[108619, 36299]], [[109049, 36591]]]
            },
            "properties": {
                "adcode": 620000,
                "name": "甘肃省",
                "center": [103.823557, 36.058039],
                "childrenNum": 14,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 27,
                "acroutes": [100000],
                "cp": [95.7129, 40.166]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@NiT[¨@tĒGo_ce¿KkaAO·m¦Gamju{ÍXÉS{}`ćJ{Z£oI{lÉjGA©¿]ck®H¡ĿhyJI»÷TewÿrkSK·~mK{Ui¸eIy³³]]µoRMmCekqHyÛjméXÍuNKŉFë^lIdxUüC `H\\¥¥®©mY¥TåçlKÅ£Sdww{LUµ³roGmn_y¡NqQweF]{Q­ÌçaUpÃR¡jGCp³VhLxV__ãRMÉªR±Ou_o³VYËoÇlKT°O]yz¯zHČgAkI§ok^UsªTfbÈyèYVHrÖnêyB{IV¿ĄO~VjRIQßÕk¥[½zs¶cuÇ±§PuyÙÈtwíCacP¥YIëĠáKZu_Qu®ās[D}]YZu¯LJS®a\\]ĉÅÃEpkKqk«bÁIãlCfWYGÍWixµbyÀÀg@}j¶¹åpwAkepãTk|¨°màN·¸@RçfQÏ¸@©u©Aa`qxqµM±c­PM`§A¦ėnÛm]íMmW¶iTeÑVÅ^UYbGbHÁ¯ÌC¨NjĀNÒat¡h}tJ }^IxTy¤^ixsIAx{ªyIwrdSttY rF±RïU©B¡n»`Í@×Ì±fõC[QM_mqď÷¥N}wVãweRqÅDFuKDqmbIubgÛoÖIW³¯ÖI¦yâoßË­G]Õ¹»»V}W~Qt¿qrmïY¿gw»zSbµM¥ÃKSº¥ªaRaÄORwì©~OH[[ŉhKr]U{adskDy®Y» [ĕSuo¥~mQĥNSi^i¥IceugkuZemXĉHmhÏg~qm¡zcLđLjWVµnQaqSLuÓ¥kWo³X}a¡s£¥jvy¤eØč@VqCtwWgKI¹¬uQa~MoS]£§HOê[`ÏfÛÊI|í@«åPk}Èũ­_wVoN¥ĂDlVO~¸Lvz]ĄrEAy©C}þDwBMqďujbĆVÌ``SÃUÓAMQcfÍxeXo´QpgsHq¾ċ¶ozoËÁFHwyQoÍkR±[Cc^­Ag½i|Nem©Xet©kFU}Í\\{`ÏM£ď_xqB[ª©Du}TONi{M^asÑOeUÞGgFuJÇkSnÏneU¹hMQëZqf£]¯bWuZ¯}³Zc\\fk¹huÁBgÁQ·òIeKxÉjipåryngR¹Å·N¥BuF[Û[bÕJueãMÁzKÝÃ¤ÓíIh}~ïĪu\\ĥnefKÓ|w¶rÜw`FnÛ^IdN¿¼EÁ²YtZE~¥ºlRA´MFz|CxflĀY~OVkvjrHQĀtl®§\\ofNÒÊXv®\\y°qDLhc`ûNe~ĴF[^»`¥äeThnlg~ún|ZvQ®ªv^qriKiZA\\h¢n^Aön_t¤o\\ÑY«AVÕCJbÅ~½\\NØ}tZx¶mŌbê¬nD²g¬NĀAxWHÖ¬xnPqjC^kôa_ÊgwöAĊs®C´`àk Rİ£§eÖX²àĒex¢H´dl¾rrĢoRXG°qTęjÕCixÍBgRqF^¦ZwJÎv@ĄøÐLºO¬b^ÚVN|¢d]òDW~XalM¸õHÌ¹¨Bm[¼uz­b½]VbwzTő¢µNMb»VEА^ĦŇQUQÇÓHťĒ´¥Fcf@ºhbİEÈTgØXzCÀJ¢BEbru|TÆaƦlÐfnEǐ°l²KŰÊ°Bư\\\\ĤLÖXB^ðŤÄErpÈfĮEVIz¤H@l~´XĨCĚxĎDnj¦TuÆHÒxeU«agķ¸OiưhɴRĘ³¦@@ĩI[[dviî}ÈIlTʶøFŠˋbe@»[ldødŠC¢Rpjø`ÒWx_¦^fsYr©jF|w´`þeV^gp~gÊ¢pGÀ¤Xhk¬m¾W`³FNmÌ{¸\\Ĩ~fXk¤`UlÂ~îBǞ¡SÈaVY¤ÒÈTrlØAhpr~]t¬Q|eîmĂQºVf£~\\¬mLYLSC¢v¾OrX´¥²²VUæDäMĀyFrw~N´{ ÜqĈnń Œhqep{Ú®ØKV|M\\ÊUbyIGi|oÎF¶s|Wd¤b¦t\\Z|ÖABiÌqby¤qĒU®s}EqÔæÃÎmÐ¡\\g½¨PxÅ´¡°ohsÊIÌŒ£K¤lBTk´SoÎHuLÔÑtirVnuxJ¦ÞgfÙl|§YOàx\\PxS`pazq¦IppĆY]ÖãU¬rgg}HyLp[XĨÍtJXu{NmkØUðjÜü OÔÕUiŎrTfnÖªEX[qÊ|yÁnFªwhĔ{CkÐºeQ]mHosKlD×·Jāud¹±§¤[vuQv¥ªaæíyP«uJWw|¹®IS]¢}yMhyko¶ĝ"],
                "encodeOffsets": [[105298, 37239]]
            },
            "properties": {
                "adcode": 630000,
                "name": "青海省",
                "center": [101.778916, 36.623178],
                "centroid": [96.043533, 35.726403],
                "childrenNum": 8,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 28,
                "acroutes": [100000],
                "cp": [96.2402, 35.4199]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@E« ¡QeÃt@CýNkWÓ`EmkknR]g³rWO¿l¡gaG¡L@y¯R¬oPd\\Tsj}Éd}§xãLMVeGBµGjiuhKiylPytA¸©C|ufYÅwOYdö^\\}MqArdtm^y´IoqauY­hoRDkyB¿ÞÝ}¥yXC¡LY±`@ÙYi{NY|sayX»A[IµtfÍeHg©rr@K}hC©{«³CIvßĀG¨@ozc{ºUvADBBBHGHDJN WqIKtįzMk¥ì_SEbTntxbwfv³PbÑĩXqs`EiHw}UªxZ¡fsÈhü¾t|ºErÈeVAbtiz{RsE¼Z@®Y{~pT]zLsd|°TFZSllMho xÅEN¦i¬DÏvg_z¥JAju¼o\\Qá¹áMr²vOnxX©fƅxk[§FUlÕwÇGW\\jî`X ^HǄPƴb¾xƊ\\ê®ÞphþtöPÂ_ŎJbnN²°KìxÀIàÄ¹äYNÆzjr²Ð\\jOpX]x¸Ofpk¤°QjljD®êÆkª¨^vQhd¸¦ÌrVni¸W^Vn_Āļ|ĠgZ^¬c@Êp~St«A_Jw~iïha²]kJ{eíĭÿåĉ{ı]ŉ¡åıÏÖ³Ô}xGêuä]êqÌWDhb¢IjvªM¦úsÀÑ g{¡]XÌ§ö{Ti[s{k`y]ÑW]··mNDgK½«¥EhsFoË¿Asċ`©S {fCuwuvWy"], ["@@Lg^}ěsFŴ"], ["@@CRHGAGAA"]],
                "encodeOffsets": [[[109844, 37990]], [[108594, 36341]], [[108618, 36301]]]
            },
            "properties": {
                "adcode": 640000,
                "name": "宁夏回族自治区",
                "center": [106.278179, 38.46637],
                "centroid": [106.169866, 37.291332],
                "childrenNum": 5,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 29,
                "acroutes": [100000],
                "cp": [105.9961, 37.3096]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@ȁĕ¿g¡wM»òmo½CuŚğďÉÀăCi½¥³{ť³­CYđSí{ŃÛ§u·¥ß«¢«æJrbysIċMě§«£·åǹ̍ȧƣŹďŋĉĕVï»ŇɇaӟÙOƱ[åġƁ§ʇµǱ£ţħũŭġkJùl¥BiJyUĭFÇeqoÃFţïA]ÕWģK[[Ư¯AůÉ±L¯kǏmFÏeƥkÅbSv{qFa¡A¿IDy×WhÇSįFga@¹de¦E³ŦđÔGRÈVňR]ĥFЏ¼UNa¶MŒ¡SxyaU ¾^®avy\\»nAº§GËöN·bkWX}ñC^¡cM{ÙU]«a¹PÏKă÷u@IÍxY]¥rEQhÎAjwÖDĚirSH¯WpQqġqk½cG³¡wđf±ßÕWf¨į¤Qßl³_­DĉtõBxÉh`ób]lDriOm«wGÕwXÿB«M±hąbibērīÞRI»ÂÓKqvVp£H±aJ]gcBÛÚÇlK×]w»Q­HReéXCeiJ£sPïIoPq{_åQYN·aVģs¥cčXS²`YoP_w±ĉSoYy¿\\]±Z«sYeCowQ÷@čmÉJak»`½]ßDy»UKÇdcumGk¿E}cHïËLËYqNĵwiáWũh®ÏĿýT·_kw«[Ĺ¡ÍqFÛk·M³qÃ[xm{Mù«·S×mkghaeÑnčgióYWPĝC¯so`µSAnE­lCÓb«H{bÕy§TviÍnuÂTªsVÓNk^ßA_k¡yãofçbObI±³I\\k©{]FyuOscßy]aBIspÛoyaDw×Y¥ZÉQ§uơAQ³M`¯Dmh¥cyPgmGw ¥AlIlImmAyEpo¿@h}M¥lëUÑJDt|³`e\\cYÏtWµ½­AeµĂñĕIuN{ĥçVXYg§dyMMMN[ly¥õR¡Yhyïd{¹£ÅONouāJhkÍMÓg^«Mi¿NcfõyRyk©S[Çz]p·kÍÇl`xjMhÕ`­ePEcd¥H³Q¨}X§CÅh_xD°­XBb`NĚTqh`xuQ_^EÆ¢HòO¨f¼¬N~vxûEemgn·YXEs~]OewLmY|eo£LY`·LÉk¯PvooTĥkđ¨ilÙh}g»pµ®ã]ÛĀĉry llOvd|xJ¿VGÉbÏGK[¿BY`fÌ£Èg¢«H_S^YÆp¤NKÂ¦GKx³ºM¶ĄÉ¼nrÙÜÃé÷lS§VA\\m¶P°Gd¦ÉLµ^WÛzHnğO}VumáaXEq¨snFE]w­B}´Ûc]o¥U¦UCn^UTcjvFps¾ xC`Ăbbú`¼r J^]xvoxYrUVCh¹z£ĠzbFtP¶avÓ¢hcQ¸`¦HµècÄZ¢o²\\^cKäN¢ÉHÝ¶uMÇ^|§G^ËPĽ@çlÅqAgsl±AmaïVwL«vTp©ðX²¾}jTtN¸ohKi]Fo@ }Xc®a^F_zmFZxA®©úxd®RĊWúTVrSZpDn\\{ĺehÃ^HÚ¾H¼ÎÐXÄ`øBZdŘldwRcÜ¬¨¤t¬h°ArFľCcZħĔhfHt`¢[ÒQvX|cªSpÒ_Bvp@Â®Ütè¤¦VQgH±^ò_qa¯fglÁ~fDvR_¦EcV¢°ulD@PÀCY¢j²HqoL¡¤¢P[ª\\zNH¦\\zTpfCn}@p hTĀj²jBª²B¾j]ÌHbq¾{ÊfºoÈ¬C¸_DoÄN¨]L\\¶V~O¬rS`vTmPlfÌÌWĺ¨HN¨zÀ]x\\^Ò`ø]\\Z CNZÀJÔz®Î]thUh^òHtJÆ®ZzMlpÆb|tâF°J\\¤z~[ºXY¦AÆlr|êXªI ÒjCÐxƔJ¬Y¨ q^y°pDJ¢ÄT®nLxilX¯Vh°b´cb¢nCjÞFdT¸MÌFx¬jČXW|ĕtõ¢gtÈZÖz¶\\²EtYjbUT]pAgnPëZMZ¦²V¦^PK¢ȝ˔UøTdwtBÈQ~±¦ZnK¤ZÈ]_Ăì¾ĶWpñÜ×fmT|ef­{wDõoOf`zå´|Nh|NÚ J^¨vrURd¨y¢B¢H|{ RzDj¢|teäEòpvîEs@P¸K²j¸MJb¾h¢Ql°EbfNreÈlPfHNzÀnGĢzÁ ©ÒJ¼dKIwfUĆtôV¨yŢÜprh\\ĺ¯äćƕÞ_ènB¼¨´T¦[ºN¬¸ºP´ƤúŢĲǘ Ę^àĂ¤rCv Ğ^è²¨ĔI èN\\hcI^u[¤LfWV¤¹\\Ú£zERkŀwAaÈXĶ Wfd¨Fc¢OÂXvĂQ VW®`æ´fĘF\\¤B{Êmd}ÊÁlErnNĂll|ÔzÂx¤q~TîRĖID º@vfsvÀaÏÌF¬ÏϪ_jAtVVX~d@ÀÊbŀfŚFƠQjÜDWƎ´`Ldª^TnÎ¨R\\u®`t¤lFfoPyÄDÄp\\`HpÆA VôQrnČ_vsÈCì]¢oÚxa~l\\GVØFrj¾GTxO@stEloe\\amg¢}B}x[aJ]¿GgcAcQXoouApoCÈnbÊoxPCs¿_¥gXoÌwÊElolJJöicCwÞrAjhQZBBc]¹hcN~YTjiÜwxuĪR^sÖfoàTÚa¦^vxªHljİeÐT~kG¨sJî_v¿ĜAôRFäWtRjc_Jº¯DgĬo¬M~l±Ð¥L]oRIdi¿ßfOØñÚóÂFÒjkPz[_­¦@ivG£ceó¦EXiemaY³{q[é¿²ßO]·M­ZŗďûñíėūIāªo¦BuÝOvLgj^cäT bSäParIVaĀOeªh@ª«¾yŐUĞdèGƠPIŠÅÚZ]ÆHòabŘPĄrÌWPSTgÎMºPUØPào¾WB`¾S¸}ØZĖĒPy˼őðÂcXk¬¦k|ÇLäYð¤[Ê©¦³@¸iĴw¬ŊbĢNƦlbagci»GÛs½¨E¤aĎCĆŵlË¼į~ÕĺƯnŗ§ϊˡnơ"],
                "encodeOffsets": [[98700, 43754]]
            },
            "properties": {
                "adcode": 650000,
                "name": "新疆维吾尔自治区",
                "center": [87.617733, 43.792818],
                "centroid": [85.294711, 41.371801],
                "childrenNum": 24,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 30,
                "acroutes": [100000],
                "cp": [84.9023, 41.748]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@ūøozÕƊ©Ʀ_Ėē¢UtÀǾv¦\\ƎuêNĨÖĚÐô´ÜŐºÄh¼¦Ît¸¾®¶ĢÖ¸¾|ÌânĈ Ú¢®` ÞFÜ¤Ģ\\ªfâø¨D]«]N}A¼sÚF|ęA{á¿óđGđl¿|­Móc§±cëĵƑUGhµñƅÃȇA¯qÃcą§qÛ^·ic_×}Ã¡ËwÅ¡û­ecÇ³ÇȍWƧTI­£Lñc[ÕQX²a¦VCòeôÑĶ© ×"], ["@@rdI"], ["@@Bph[GUs\\"], ["@@¡}AazJ®QPzÌGZ«H"], ["@@ptbqA"], ["@@fAKÃEj@¢"], ["@@hk@D"], ["@@|T|]M© "], ["@@t^Iyi\\"], ["@@ ACZM"], ["@@ÆEA¡~[Uw»vuvF"], ["@@tGW{["], ["@@Ac}]"], ["@@zzZ[]"]],
                "encodeOffsets": [[[123335, 22981]], [[127532, 26526]], [[126408, 26344]], [[122518, 24117]], [[126635, 26537]], [[122375, 24193]], [[122366, 23949]], [[122427, 24235]], [[124997, 26240]], [[124384, 23222]], [[124427, 22618]], [[125028, 26112]], [[122288, 23775]], [[123244, 22864]]]
            },
            "properties": {
                "adcode": 710000,
                "name": "台湾省",
                "center": [121.509062, 25.044332],
                "centroid": [120.971485, 23.749452],
                "childrenNum": 0,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 31,
                "acroutes": [100000],
                "cp": [121.0254, 23.5986]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@¨PZn¾RT`´KT[@UxfFKB@tehsLõ·gnwc^m¸R ¨~C@CkiT¥k@BA@@@BIµ{@@Ey@m~[gd×ÁLCtIt|sh§LsIsolU{m_psV¥qKRÒZ[oÐ¦doKIIZC¨ºp~\\"], ["@@pSWu@F¼hq"], ["@@A@xgeYO"], ["@@@@@BFF@@B@@AGE"], ["@@B@@EAF"], ["@@@@@BBCAB"], ["@@@A@@@B"], ["@@@B@@@A"], ["@@@BBAA@"]],
                "encodeOffsets": [[[116769, 23045]], [[116883, 22748]], [[117050, 22910]], [[117064, 22919]], [[117049, 22910]], [[117060, 22835]], [[117064, 22920]], [[117118, 22859]], [[117068, 22833]]]
            },
            "properties": {
                "adcode": 810000,
                "name": "香港特别行政区",
                "center": [114.173355, 22.320048],
                "centroid": [114.134357, 22.377366],
                "childrenNum": 18,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 32,
                "acroutes": [100000],
                "cp": [114.2578, 22.3242]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@gHjFbcz¿¥q"], ["@@@LV@UK"]],
                "encodeOffsets": [[[116280, 22639]], [[116302, 22728]]]
            },
            "properties": {
                "adcode": 820000,
                "name": "澳门特别行政区",
                "center": [113.54909, 22.198951],
                "centroid": [113.566988, 22.159307],
                "childrenNum": 8,
                "level": "province",
                "parent": {
                    "adcode": 100000
                },
                "subFeatureIndex": 33,
                "acroutes": [100000],
                "cp": [113.5547, 22.1484]
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@CECCECE@E@EBCDCFAFBFɼनDFDDFDFBFAFADCDEBEAEɻध"], ["@@ECEAE@E@EDCDAF@H@FDDئݐDDFBH@F@DCFEBE@EAEAEإݍ"], ["@@CEECEAEBEBEDCDAF@FDHҪࡢDDDDFBH@FADCDEBE@EAEҩࡡ"], ["@@@@A@ECECCEAEAEBEBCDCF@F@@ࡄBHBDFFFBFBFAFADEBCBG@ࡅ"], ["@@ƜΤĪ͆BFDDFDF@F@FCFCBEBEAEĩͅ@AƛΧAAƉɱCEECE@E@EBEDAFAF@FBFƊɲ"], ["@@CCECE@EBEDCDCF@FBFDFפ۪FDFBF@FAFADEBE@E@ECEץۧ"], ["@@ǪÀˠźFBH@FADCDEBE@EAECEEAˡŹCAǫÁ@@ѩıE@EBEDCDAFAFBFDFDDFBѪĲ"], ["@@@DoŐABʾ@BDΎ@DtŀDFDFDDF@H@FADCDEBE@EsĽCΉʽpō|Ù@E@EAECEEAEAE@EDEDAD}Þ"], ["@@¼ĸ¨ĸƨpƊLǎCĈBFBFDFFBFBFAFAFCBEBEDĉ@AKǍ@AqƋ@AƫAA§ĹAA»ķAAÓĭCCECEAEBEBEDAFAF@FBFÖĬ"], ["@@·ǺĉȄćƈ·îȇʆCF@F@FBFDDFDFBHADAFCȈʅ@Aºí@AĊƉBAĊȇ@Aºǻ@A`Û@EAEACECECE@EBEDCDAF_Ü"]],
                "encodeOffsets": [[[125460, 24024]], [[124081, 21305]], [[122342, 18440]], [[121931, 15402]], [[121535, 11459]], [[118318, 7319]], [[115003, 3620]], [[110859, 6236]], [[112772, 11642]], [[112466, 15595]]]
            },
            "properties": {
                "name": "",
                "adchar": "JD",
                "adcode": "100000_JD",
                "cp": ""
            }
        }],
        "UTF8Encoding": true
    })
}));
