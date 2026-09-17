/**
 * @typedef {{
 *   guideTitle: string, guideDescription: string, h1: string, intro: string[],
 *   registerHeading: string, registerBody: string,
 *   accessHeading: string, accessBody: string,
 *   feesTitle: string, feesDescription: string, feesH1: string, feesIntro: string,
 *   ctaLabel: string, notAffiliateNote: string,
 * }} ExchangeCopy
 */

/** @type {Record<'en'|'id'|'tl', Record<string, ExchangeCopy>>} */
export const copy = {
  en: {
    'gems-trade': {
      guideTitle: 'Gems Trade: Fees, Access & Sign-Up (2026)',
      guideDescription: 'What Gems Trade is, its maker/taker fees, and who can use it. Checked 2026-09-18.',
      h1: 'Gems Trade',
      intro: [
        "Gems Trade is a centralized crypto exchange launched in 2025 as part of the wider Gems ecosystem. It's run by Gems Exchange Ltd., incorporated in Anjouan, Union of Comoros, and its published terms are written for customers outside the European Economic Area (EEA).",
        'It offers spot trading, an instant convert tool, and basket trading (buying a themed set of tokens in one transaction).',
      ],
      registerHeading: 'What happens when you sign up',
      registerBody:
        "You create an account with an email and password, confirm it by email, then complete identity verification before you can trade or withdraw: photos of both sides of a government ID plus a selfie holding it. Gems Trade may also ask you to declare that you're not a politically exposed person (PEP).",
      accessHeading: 'Who can use it',
      accessBody:
        "Gems Trade's terms cover non-EEA customers, so residents of EEA countries aren't served under this offering. Beyond the standard UN / US OFAC / EU sanctions exclusions, Gems Trade doesn't publish a separate country blocklist.",
      feesTitle: 'Gems Trade Fees: Maker, Taker & Withdrawal (2026)',
      feesDescription:
        "Gems Trade's real maker and taker fees by tier, plus withdrawal costs, sourced from its own fee page. Checked 2026-09-18.",
      feesH1: 'Gems Trade fees',
      feesIntro: "These numbers come straight from Gems Trade's own fee page, checked 2026-09-18.",
      ctaLabel: 'Go to Gems Trade',
      notAffiliateNote: "This is a plain link to Gems Trade's own site — not an affiliate link.",
    },
    phemex: {
      guideTitle: 'Phemex Review: Fees, Access & Sign-Up (2026)',
      guideDescription: 'What Phemex is, its contract trading fees, and where to find its full fee schedule. Checked 2026-09-18.',
      h1: 'Phemex',
      intro: ['Phemex is a centralized crypto exchange offering spot trading, perpetual contracts, and copy trading.'],
      registerHeading: 'What happens when you sign up',
      registerBody:
        "You create an account, verify your email, and complete Phemex's identity verification before trading limits are lifted. Exact verification tiers and withdrawal limits are published on Phemex's own site.",
      accessHeading: 'Fees and access, honestly',
      accessBody:
        "Phemex's own help center documents a 0.01% maker / 0.06% taker fee for contract (perpetual futures) trading. Its full, current fee schedule — including spot trading — is published at phemex.com/fees-conditions, which we couldn't independently re-verify for this check. Confirm the current spot rate there before you trade.",
      feesTitle: 'Phemex Fees: Contract Trading Rates (2026)',
      feesDescription: "Phemex's own-published contract trading fees, with a direct link to its full fee schedule. Checked 2026-09-18.",
      feesH1: 'Phemex fees',
      feesIntro:
        "Phemex's help center documents contract (perpetual futures) fees below. For the complete and current schedule, including spot trading, see Phemex's own Fees & Conditions page linked under Sources.",
      ctaLabel: 'Go to Phemex',
      notAffiliateNote: "This is a plain link to Phemex's own site — not an affiliate link.",
    },
    tapbit: {
      guideTitle: 'Tapbit Review: Fees, Access & Sign-Up (2026)',
      guideDescription: 'What Tapbit is, its real spot/derivatives fees, and which countries it restricts. Checked 2026-09-18.',
      h1: 'Tapbit',
      intro: [
        'Tapbit is a centralized crypto exchange offering spot and derivatives trading. It’s registered as a Money Services Business (MSB) with FinCEN in the US and is applying for money-transmitter licenses in multiple US states.',
      ],
      registerHeading: 'What happens when you sign up',
      registerBody: "You create an account and verify your identity before trading. Tapbit's own help center covers the details of its verification process.",
      accessHeading: 'Who can use it',
      accessBody:
        "Tapbit publishes a list of restricted countries and regions, including the United States — despite its US FinCEN registration. Check the full list below before you sign up; Tapbit says it can change without notice.",
      feesTitle: 'Tapbit Fees: Spot & Derivatives Rates (2026)',
      feesDescription: "Tapbit's own-published spot and derivatives fees, plus a real USDT withdrawal example. Checked 2026-09-18.",
      feesH1: 'Tapbit fees',
      feesIntro: "These numbers come straight from Tapbit's own help center, checked 2026-09-18.",
      ctaLabel: 'Go to Tapbit',
      notAffiliateNote: "This is a plain link to Tapbit's own site — not an affiliate link.",
    },
  },
  id: {
    'gems-trade': {
      guideTitle: 'Gems Trade: Biaya, Akses & Cara Daftar (2026)',
      guideDescription: 'Apa itu Gems Trade, biaya maker/taker sebenarnya, dan siapa yang bisa memakainya. Diperiksa 2026-09-18.',
      h1: 'Gems Trade',
      intro: [
        'Gems Trade adalah exchange kripto tersentralisasi yang diluncurkan tahun 2025 sebagai bagian dari ekosistem Gems yang lebih luas. Dijalankan oleh Gems Exchange Ltd., berbadan hukum di Anjouan, Union of Comoros, dan syarat & ketentuannya ditulis untuk pelanggan di luar Kawasan Ekonomi Eropa (EEA).',
        'Gems Trade menawarkan spot trading, fitur convert instan, dan basket trading (membeli sekumpulan token bertema dalam satu transaksi).',
      ],
      registerHeading: 'Apa yang terjadi saat Anda mendaftar',
      registerBody:
        'Anda membuat akun dengan email dan kata sandi, mengonfirmasinya lewat email, lalu menyelesaikan verifikasi identitas sebelum bisa trading atau menarik dana: foto kedua sisi kartu identitas resmi plus swafoto sambil memegangnya. Gems Trade juga bisa meminta Anda menyatakan bukan merupakan politically exposed person (PEP).',
      accessHeading: 'Siapa yang bisa memakainya',
      accessBody:
        'Syarat & ketentuan Gems Trade berlaku untuk pelanggan di luar EEA, sehingga penduduk negara EEA tidak dilayani dalam layanan ini. Selain pengecualian sanksi standar (PBB / US OFAC / Uni Eropa), Gems Trade tidak mempublikasikan daftar blokir negara terpisah.',
      feesTitle: 'Biaya Gems Trade: Maker, Taker & Penarikan (2026)',
      feesDescription:
        'Biaya maker dan taker Gems Trade yang sebenarnya per tingkatan, plus biaya penarikan, bersumber dari halaman biaya resminya. Diperiksa 2026-09-18.',
      feesH1: 'Biaya Gems Trade',
      feesIntro: 'Angka-angka ini diambil langsung dari halaman biaya resmi Gems Trade, diperiksa 2026-09-18.',
      ctaLabel: 'Buka Gems Trade',
      notAffiliateNote: 'Ini adalah tautan biasa ke situs resmi Gems Trade — bukan tautan afiliasi.',
    },
    phemex: {
      guideTitle: 'Phemex: Biaya, Akses & Cara Daftar (2026)',
      guideDescription: 'Apa itu Phemex, biaya contract trading-nya, dan di mana menemukan jadwal biaya lengkapnya. Diperiksa 2026-09-18.',
      h1: 'Phemex',
      intro: ['Phemex adalah exchange kripto tersentralisasi yang menawarkan spot trading, kontrak perpetual, dan copy trading.'],
      registerHeading: 'Apa yang terjadi saat Anda mendaftar',
      registerBody:
        'Anda membuat akun, memverifikasi email, dan menyelesaikan verifikasi identitas Phemex sebelum batas trading dicabut. Tingkatan verifikasi dan limit penarikan yang tepat dipublikasikan di situs resmi Phemex.',
      accessHeading: 'Biaya dan akses, apa adanya',
      accessBody:
        'Pusat bantuan resmi Phemex mendokumentasikan biaya maker 0,01% / taker 0,06% untuk trading kontrak (perpetual futures). Jadwal biaya lengkap dan terkininya — termasuk spot trading — dipublikasikan di phemex.com/fees-conditions, yang tidak bisa kami verifikasi ulang secara independen untuk pemeriksaan ini. Konfirmasi tarif spot terkini di sana sebelum Anda trading.',
      feesTitle: 'Biaya Phemex: Tarif Contract Trading (2026)',
      feesDescription:
        'Biaya contract trading Phemex yang dipublikasikan resmi, dengan tautan langsung ke jadwal biaya lengkapnya. Diperiksa 2026-09-18.',
      feesH1: 'Biaya Phemex',
      feesIntro:
        'Pusat bantuan Phemex mendokumentasikan biaya kontrak (perpetual futures) di bawah ini. Untuk jadwal lengkap dan terkini, termasuk spot trading, lihat halaman Fees & Conditions resmi Phemex yang tertaut di bagian Sumber.',
      ctaLabel: 'Buka Phemex',
      notAffiliateNote: 'Ini adalah tautan biasa ke situs resmi Phemex — bukan tautan afiliasi.',
    },
    tapbit: {
      guideTitle: 'Tapbit: Biaya, Akses & Cara Daftar (2026)',
      guideDescription: 'Apa itu Tapbit, biaya spot/derivatif sebenarnya, dan negara mana yang dibatasi. Diperiksa 2026-09-18.',
      h1: 'Tapbit',
      intro: [
        'Tapbit adalah exchange kripto tersentralisasi yang menawarkan trading spot dan derivatif. Terdaftar sebagai Money Services Business (MSB) di FinCEN Amerika Serikat dan sedang mengajukan lisensi money-transmitter di beberapa negara bagian AS.',
      ],
      registerHeading: 'Apa yang terjadi saat Anda mendaftar',
      registerBody: 'Anda membuat akun dan memverifikasi identitas sebelum bisa trading. Pusat bantuan resmi Tapbit menjelaskan detail proses verifikasinya.',
      accessHeading: 'Siapa yang bisa memakainya',
      accessBody:
        'Tapbit mempublikasikan daftar negara dan wilayah yang dibatasi, termasuk Amerika Serikat — meski terdaftar di FinCEN AS. Periksa daftar lengkapnya di bawah sebelum mendaftar; Tapbit menyatakan daftar ini bisa berubah tanpa pemberitahuan.',
      feesTitle: 'Biaya Tapbit: Tarif Spot & Derivatif (2026)',
      feesDescription: 'Biaya spot dan derivatif Tapbit yang dipublikasikan resmi, plus contoh penarikan USDT nyata. Diperiksa 2026-09-18.',
      feesH1: 'Biaya Tapbit',
      feesIntro: 'Angka-angka ini diambil langsung dari pusat bantuan resmi Tapbit, diperiksa 2026-09-18.',
      ctaLabel: 'Buka Tapbit',
      notAffiliateNote: 'Ini adalah tautan biasa ke situs resmi Tapbit — bukan tautan afiliasi.',
    },
  },
  tl: {
    'gems-trade': {
      guideTitle: 'Gems Trade: Bayarin, Access & Sign-Up (2026)',
      guideDescription: 'Ano ang Gems Trade, ang tunay na maker/taker fees nito, at kung sino ang puwedeng gumamit. Sinuri 2026-09-18.',
      h1: 'Gems Trade',
      intro: [
        'Ang Gems Trade ay isang centralized crypto exchange na inilunsad noong 2025 bilang bahagi ng mas malawak na Gems ecosystem. Pinapatakbo ito ng Gems Exchange Ltd., nakarehistro sa Anjouan, Union of Comoros, at ang mga tuntunin nito ay para sa mga customer sa labas ng European Economic Area (EEA).',
        'Nag-aalok ito ng spot trading, instant convert tool, at basket trading (pagbili ng grupo ng mga token na may tema sa isang transaksyon lang).',
      ],
      registerHeading: 'Ano ang mangyayari kapag nag-sign up ka',
      registerBody:
        'Gagawa ka ng account gamit ang email at password, kukumpirmahin ito sa email, tapos kumpletuhin ang identity verification bago ka makapag-trade o makapag-withdraw: litrato ng dalawang gilid ng valid ID plus selfie na hawak ito. Puwede ring hilingin ng Gems Trade na ideklara mong hindi ka isang politically exposed person (PEP).',
      accessHeading: 'Sino ang puwedeng gumamit',
      accessBody:
        'Ang mga tuntunin ng Gems Trade ay para sa mga customer sa labas ng EEA, kaya hindi sila naglilingkod sa mga residente ng bansang EEA. Bukod sa karaniwang exclusion ng UN / US OFAC / EU sanctions, walang hiwalay na listahan ng bawal na bansa na inilathala ng Gems Trade.',
      feesTitle: 'Bayarin ng Gems Trade: Maker, Taker & Withdrawal (2026)',
      feesDescription:
        'Ang tunay na maker at taker fees ng Gems Trade ayon sa tier, pati na rin ang halaga ng withdrawal, mula sa opisyal nitong fee page. Sinuri 2026-09-18.',
      feesH1: 'Bayarin ng Gems Trade',
      feesIntro: 'Direktang galing ang mga numerong ito sa opisyal na fee page ng Gems Trade, sinuri noong 2026-09-18.',
      ctaLabel: 'Pumunta sa Gems Trade',
      notAffiliateNote: 'Isa itong plain na link papunta sa opisyal na site ng Gems Trade — hindi ito affiliate link.',
    },
    phemex: {
      guideTitle: 'Phemex: Bayarin, Access & Sign-Up (2026)',
      guideDescription: 'Ano ang Phemex, ang contract trading fees nito, at saan makikita ang buong fee schedule. Sinuri 2026-09-18.',
      h1: 'Phemex',
      intro: ['Ang Phemex ay isang centralized crypto exchange na nag-aalok ng spot trading, perpetual contracts, at copy trading.'],
      registerHeading: 'Ano ang mangyayari kapag nag-sign up ka',
      registerBody:
        'Gagawa ka ng account, i-ve-verify ang email mo, at kukumpletuhin ang identity verification ng Phemex bago maalis ang trading limits. Ang eksaktong verification tiers at withdrawal limits ay nakalathala sa opisyal na site ng Phemex.',
      accessHeading: 'Mga bayarin at access, nang tapat',
      accessBody:
        'Dokumentado sa opisyal na help center ng Phemex ang 0.01% maker / 0.06% taker fee para sa contract (perpetual futures) trading. Ang buo at kasalukuyang fee schedule nito — kabilang ang spot trading — ay nakalathala sa phemex.com/fees-conditions, na hindi namin na-verify nang mag-isa para sa pagsuring ito. Kumpirmahin ang kasalukuyang spot rate doon bago ka mag-trade.',
      feesTitle: 'Bayarin ng Phemex: Contract Trading Rates (2026)',
      feesDescription: 'Ang opisyal na contract trading fees ng Phemex, kasama ang direktang link sa buong fee schedule nito. Sinuri 2026-09-18.',
      feesH1: 'Bayarin ng Phemex',
      feesIntro:
        'Dokumentado sa help center ng Phemex ang contract (perpetual futures) fees sa ibaba. Para sa buo at kasalukuyang schedule, kabilang ang spot trading, tingnan ang opisyal na Fees & Conditions page ng Phemex na naka-link sa ilalim ng Sources.',
      ctaLabel: 'Pumunta sa Phemex',
      notAffiliateNote: 'Isa itong plain na link papunta sa opisyal na site ng Phemex — hindi ito affiliate link.',
    },
    tapbit: {
      guideTitle: 'Tapbit: Bayarin, Access & Sign-Up (2026)',
      guideDescription: 'Ano ang Tapbit, ang tunay na spot/derivatives fees nito, at aling mga bansa ang restricted. Sinuri 2026-09-18.',
      h1: 'Tapbit',
      intro: [
        'Ang Tapbit ay isang centralized crypto exchange na nag-aalok ng spot at derivatives trading. Nakarehistro ito bilang Money Services Business (MSB) sa FinCEN ng US at kasalukuyang nag-aaplay ng money-transmitter licenses sa ilang estado ng US.',
      ],
      registerHeading: 'Ano ang mangyayari kapag nag-sign up ka',
      registerBody: 'Gagawa ka ng account at i-ve-verify ang identity mo bago makapag-trade. Ang opisyal na help center ng Tapbit ang sumasakop sa detalye ng proseso ng pag-verify.',
      accessHeading: 'Sino ang puwedeng gumamit',
      accessBody:
        'Naglalathala ang Tapbit ng listahan ng mga restricted na bansa at rehiyon, kabilang ang United States — sa kabila ng pagkarehistro nito sa US FinCEN. Tingnan ang buong listahan sa ibaba bago ka mag-sign up; sabi ng Tapbit puwede itong magbago nang walang paunang abiso.',
      feesTitle: 'Bayarin ng Tapbit: Spot & Derivatives Rates (2026)',
      feesDescription: 'Ang opisyal na spot at derivatives fees ng Tapbit, kasama ang tunay na halimbawa ng USDT withdrawal. Sinuri 2026-09-18.',
      feesH1: 'Bayarin ng Tapbit',
      feesIntro: 'Direktang galing ang mga numerong ito sa opisyal na help center ng Tapbit, sinuri noong 2026-09-18.',
      ctaLabel: 'Pumunta sa Tapbit',
      notAffiliateNote: 'Isa itong plain na link papunta sa opisyal na site ng Tapbit — hindi ito affiliate link.',
    },
  },
};
