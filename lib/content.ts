import { assets } from "@/lib/assets";

export type RichBlock = {
  type: "p" | "li";
  text: string;
};

export type Practice = {
  slug: string;
  number: string;
  short: string;
  title: string;
  summary: string;
  body: RichBlock[];
  image: string;
  sourceUrl: string;
};

const practiceSource = [
  {
    "slug": "criminal-law",
    "number": "01",
    "short": "Criminal",
    "title": "Criminal Law",
    "summary": "Your liberty is the most important thing next to your life. After that is your good name and ensuring your rights are protected from an overreaching government. You are innocent until proven guilty but if you are pleading guilty there is a lot we can do for you to mitigate the penalties.",
    "body": [
      {
        "type": "p",
        "text": "If you are facing a criminal or traffic charge, Nightingale Lawyers is here to support you. There are two general approaches to this:"
      },
      {
        "type": "p",
        "text": "First, plead not guilty and defend yourself by proving your own set of facts."
      },
      {
        "type": "p",
        "text": "Second, plead guilty and mitigate the penalty by demonstrating your remorse and good character."
      },
      {
        "type": "p",
        "text": "Either way you need someone you can speak to and trust. We know how to ask the right questions so that you can achieve the best possible outcome."
      },
      {
        "type": "p",
        "text": "Our experienced criminal lawyers are dedicated to defending your rights and providing you with the best representation in Court."
      },
      {
        "type": "p",
        "text": "Criminal Offences"
      },
      {
        "type": "p",
        "text": "We undertake a wide range of criminal matters. Our lawyers regularly appear in all courts in NSW. We are equipped to handle urgent bail applications (including those on weekends and public holidays) as well sentencing hearings and defended hearings. Our expertise covers all areas of criminal law."
      },
      {
        "type": "p",
        "text": "We pride ourselves on predicting the outcome of a matter so that you can get the best possible legal advice. Your liberty is the most important thing and we know how to discover evidence to prove your version of facts. The burden of proof is beyond a reasonably doubt so if you have any doubt that the Police have made an error then we can help you test and prove that. It is all about ensuring justice and the truth prevails."
      },
      {
        "type": "p",
        "text": "Traffic Offences\nIn addition to criminal matters, we also offer specialized assistance in traffic offences. Whether you are facing charges for drink driving, driving on a suspended or disqualified license, or careless or dangerous driving, our expert traffic lawyers are here to help. We can provide guidance and representation for all traffic-related charges, including, applying for relei against RMS suspensions and demerit point suspensions."
      },
      {
        "type": "p",
        "text": "We understand the significance of your driver's license to your job, family, and freedom. We will thoroughly investigate your case, provide guidance for your Court appearance and advocate strongly on your behalf. With our extensive knowledge of driving and traffic law, we will strive to achieve the best possible outcome for you, and we are very proud to say we have a strong, if not perfect, record of predicting the correct outcome."
      },
      {
        "type": "p",
        "text": "If you are concerned about potential penalties or seek practical legal advice, we offer an initial free and no-obligation consultation. Contact us today at (02) 4201 0374 or use our online booking form."
      },
      {
        "type": "p",
        "text": "For emergency after-hours situations, you can also call us on our landline (02) 4201 0374 which forwards to our duty solicitor's mobile after hours."
      },
      {
        "type": "p",
        "text": "If you have received a grant for legal aid we can assist you. We are on the Summary Crime and Indictable Crime panels. Contact our team and we can be assigned to your matter."
      }
    ],
    "imageKey": "criminal",
    "sourceUrl": "https://www.nightingalelawyers.com/copy-of-service-1"
  },
  {
    "slug": "conveyancing",
    "number": "02",
    "short": "Property",
    "title": "Conveyancing",
    "summary": "Conveyancing is a strict transactional process. If you are selling you need to make sure you disclose everything you can about the property. If you are buying you need to make sure you get what you bargained for. We can help you achieve your objective with fixed fees.",
    "body": [
      {
        "type": "p",
        "text": "At Nightingale Lawyers, we offer fixed fees for conveyancing. We also provide fixed fees for commercial and retail leases. We can generally match anyone's prices but no one else can match our service."
      },
      {
        "type": "p",
        "text": "If you are concerned about potential penalties or seek practical legal advice, we offer an initial free and no-obligation consultation. Contact us today at (02) 4201 0374 or use our online booking form."
      },
      {
        "type": "p",
        "text": "Our team is dedicated to helping you understand how things works. The only thing that separates us from the client is understanding the process. That is why we can explain everything is a no nonsense and down to earth way. We prde ourselves in providing you with practical and easily understandable advice, ensuring a smooth and efficient property transaction process."
      },
      {
        "type": "p",
        "text": "Rest assured, you will have direct access to qualified lawyers who can address any concerns or issues that may arise during your matter. We also have experience litigating disputes and we have never permitted our clients to go to Court after a problematic conveyance. Essentially, people want to buy and sell and there we have always find a way to resolve problems with minimal issues and we are proud to say we have never allowed a property transaction (that we were originally involved in the transaction itself) to deteriorate into a litigation. Our supportive staff will be there to assist you every step of the way, providing guidance and support throughout the entire process."
      },
      {
        "type": "p",
        "text": "To ensure transparency and peace of mind, our fees are fixed in advance, eliminating any surprises along the way and allowing you to have a clear understanding of the costs involved."
      },
      {
        "type": "p",
        "text": "We offer legal advice and assistance in various areas, including:"
      },
      {
        "type": "li",
        "text": "Buying or Selling a Property: whether you are purchasing or selling residential or commercial property, our team can provide comprehensive legal support to facilitate a successful transaction."
      },
      {
        "type": "li",
        "text": "Buying or Selling a Business: if you are venturing into buying or selling a business, our expertise in this area can guide you through the legal complexities and ensure a smooth process."
      },
      {
        "type": "li",
        "text": "Commercial or Retail Leasing: we can assist both landlords and tenants in negotiating and drafting commercial or retail lease agreements, protecting your interests and rights."
      },
      {
        "type": "li",
        "text": "Strata or Community Title: our team has extensive knowledge in strata and community title matters, assisting with legal issues related to property subdivisions and management."
      },
      {
        "type": "li",
        "text": "Property Disputes: in case of property disputes, our lawyers are well-equipped to provide effective legal representation and help resolve conflicts through negotiation or litigation."
      },
      {
        "type": "p",
        "text": "With Nightingale Lawyers by your side, you can trust that your property and conveyancing matters will be handled with utmost professionalism and care."
      }
    ],
    "imageKey": "conveyancing",
    "sourceUrl": "https://www.nightingalelawyers.com/copy-of-criminal-law"
  },
  {
    "slug": "family-law",
    "number": "03",
    "short": "Family",
    "title": "Family Law",
    "summary": "We have a singular approach to family law disputes - especially when there are children involved. We aim to be amicable and conciliatory because your Court matter is never going to outlast your obligations to your family. A costly and protracted dispute will only compound resentment and in the worst case traumatise everyone involved. If you are willing to be reasonable, conciliatory and avoid paying ridiculous legal fees with endless fighting - we can figure it out together.",
    "body": [
      {
        "type": "p",
        "text": "Family Law proceedings present the most challenges. They are not especially difficult to handle from a legal perspective but they present a social challenge that can impact your life long after the proceedings are finished - especially if there are children involved. It certainly does not help when lawyers are so costly and adversarial. The fact is that life goes on after a separation or divorce and you need to find a way forward in a long lasting and healthy way."
      },
      {
        "type": "p",
        "text": "At Nightingale Lawyers, we take a very singular approach to your family law dispute. Whether it is in relation to Financial and Property matters, and especially in relation to Child and Parenting orders, we aim to re-establish lines of communication and settle your matter in the most cost effective way possible."
      },
      {
        "type": "p",
        "text": "If there are children involved you are most probably going to have to work with your ex partner whether you like it or not. Excluding extreme cases where violence exists (which cannot and will not be tolerated) you can reasonably re-establish a dialogue for the sake of your children. The family law proceedings will eventually end but your ties to your family will not. It is in your best interests to try and find an amicable solution and we always want to act in your best interests."
      },
      {
        "type": "p",
        "text": "If you are fighting in the family law Courts then you are suffering. Unless the fight is to ensure the safety of your children and safeguard them, or yourself, against domestic violence, on a balance of probabilities, it is most likely not worth your time and money."
      },
      {
        "type": "p",
        "text": "If you are intent on finding a quick and amicable solution, at Nightingale Lawyers we can figure it out together."
      },
      {
        "type": "p",
        "text": "If you are suffering from domestic violence (or if you know of someone who is) please contact 000. Alternatively you can contact 1800RESPECT. Domestic Violence cannot be tolerated. If you would like to discuss this with us it would be our solemn privilege to help but if this is an emergency please contact Emergency Services without hesitation."
      },
      {
        "type": "p",
        "text": "If you are seeking legal advice we offer an initial free and no-obligation consultation. Contact us today at 0407 000 007 or use our online booking form."
      },
      {
        "type": "p",
        "text": "For emergency after-hours situations, you can also call us on our landline 0407 000 007 which forwards to our duty solicitor's mobile after-hours."
      }
    ],
    "imageKey": "family",
    "sourceUrl": "https://www.nightingalelawyers.com/copy-of-criminal-law-1"
  },
  {
    "slug": "construction-law",
    "number": "04",
    "short": "Construction",
    "title": "Construction Law",
    "summary": "Building and Construction law is a complicated area of law governed by old legislation. Whether you are a builder or owner, the most important thing is to make sure you get what you bargained for. Before any dispute your interests aligned within your Contract. Getting things back on track is paramount.",
    "body": [
      {
        "type": "p",
        "text": "Whether you are a builder or a subbie unfairly prosecuted, or a home owner suffering from poor building and construction work we can help you find the correct path forward. Either way you, if you are in the midst of a building and construction dispute, you are already losing - fighting on too many fronts. You have either just spent a lot of time and money doing the work or paying for it. So how could you spend more and more to fight a legal dispute which may not guarantee you a positive outcome? Especially when then law is clear about making sure the building and construction work must be to a proper/workmanlike standard and people should be fairly compensated to achieve that."
      },
      {
        "type": "p",
        "text": "No matter which way you look at it you need to test and demonstrate the quality of the work, resolve any issues and work with the other party in order to make sure the building is at the quality it should be. That is why we can comfortably act for either side because the approach should be the same either way - finish the job quickly and do not wast money in Court or the NCAT. Just make sure the building is good and the price is fair and you do not need to fight over the interpretation of the Home Building Act 1989 which is so old and outdated."
      },
      {
        "type": "p",
        "text": "If you are suffering from a dispute contact us and we can find a plan to make sure you can get the contract back on track. Whether you are a builder, or having something built, do not forget that both of your objectives align somewhere. We are very successful getting things back on track. If not, we know how efficient and effectively litigate, in order to obtain damages, against those who failed to provide what they promised and are not reasonable enough to remedy their failure."
      },
      {
        "type": "p",
        "text": "We offer an initial free and no-obligation consultation. Contact us today at (02) 4201 0374 or use our online booking form."
      },
      {
        "type": "p",
        "text": "More Information about our work in Construction Law"
      },
      {
        "type": "p",
        "text": "At Nightingale Lawyers, we also do work in building and construction matters. We have experience in handling a wide range of residential and commercial building disputes. Our client base includes builders and property developers to residential home owners who have had a hard time with renovations."
      },
      {
        "type": "p",
        "text": "On either side, the main priority should be ensuring that the building work is done to a reasonable and workmanlike standard so that you can live there or at least pay the mortgage. The first thing to do is identify what it will take to make sure the building and construction work is done correctly. No matter what side you are on the Court or NCAT will require certainty that the building is good and property. We do not waste time fighting the legal issues unless we absolutely have to. Instead we make sure there is a costs effective plan to get your build (whichever side you are on) on the right track."
      },
      {
        "type": "p",
        "text": "We understand the complexities of the construction industry and the challenges that can arise at various stages of a project. So it is always best to consult with a lawyer beforehand. Our comprehensive range of services includes:"
      },
      {
        "type": "li",
        "text": "Contract Drafting and Review: we can draft or review your building contract in order to ensure you get what you bargained for and that your interests are protected."
      },
      {
        "type": "li",
        "text": "Payment Claims/Schedules and Debt Recovery: we have a lot of experience dealing with dispute under the Building and Construction Security of Payments Act 1999 and regulation. Our team navigates payment disputes and helps recover outstanding debts, ensuring fair compensation for your work or, in the alternative, making sure you are paying the fair price. This legislation has a strict, but efficient, way to deal with issues and we can help you understand how to use this legislation in order to protect your interests."
      },
      {
        "type": "li",
        "text": "Dispute Resolution and Litigation: we provide skilled representation in dispute resolution, aiming first to find amicable resolutions, however always being ready to fight all the way in order to achieve your objective. We can assist in litigation pertaining to the statutory warranties under the the Home Building Act 1989, Design and Building Practitioners Act 2020 and other legislation. Essentially, you need a plan to identify the quality of work and to rectify any issues in the most cost effective way. You do not need to spend a lot of money to make sure you got what you bargained for with a HIA Contract or another building and construction Contract."
      },
      {
        "type": "li",
        "text": "Liability Claims and Insurance: we assist with negligence, other liability claims and provide guidance on insurance matters to protect your rights and interests."
      },
      {
        "type": "li",
        "text": "Body corporate advice: we offer guidance on legal matters related to the Strata Schemes Management Act 2015 and ancillary legislation. We can assist in strata and community title schemes, helping you navigate complex regulations and resolve issues within these structures without having to go to NCAT."
      },
      {
        "type": "li",
        "text": "Risk and Project Management: our principal lawyer can be on call to provide you with advice to help you in your project. The best advice makes sure you do not end up in the NCAT or superior Courts. The best advice mitigates and prevents a dispute. We risk management strategies and can help you navigate building protection measures to mitigate your present and future liabilities."
      },
      {
        "type": "li",
        "text": "Property Transactions: we can provide you with advice in relation to buying and selling land with building and construction in mind. You may want to develop or sell newly developed lots."
      },
      {
        "type": "p",
        "text": "Whether you need support in the entire building and construction process, from property transactions to dispute resolution, Nightingale Lawyers is equipped to assist you. We are committed to providing comprehensive legal services that address your specific needs and ensure a smooth and successful outcome for your projects."
      }
    ],
    "imageKey": "construction",
    "sourceUrl": "https://www.nightingalelawyers.com/service-1"
  },
  {
    "slug": "commercial-law",
    "number": "05",
    "short": "Commercial",
    "title": "Commercial Law",
    "summary": "You need to earn a crust and the best thing to do is have a lawyer who can help you avoid problems and disputes. When it comes to making deals, time is a big constraint, because a lot can happen over time. We can help you avoid problems by foreseeing and mitigating risk. Even if the worst happens, and you end up in Court, if a lawyer is there to help you in the beginning they can be best placed to ensure victory at the end.",
    "body": [
      {
        "type": "p",
        "text": "Our team of can help you in any commercial transaction or issue. If you have been reading through our other practice areas you will certainly identify a theme based on our philosophy. It is always best to avoid a dispute where you can but at all times being ready to win if necessary. However, being in a litigation is already a loss so it is important to seek advice before that happens. If it does happen, being capable of fighting effectively and efficiently is paramount to ensure your problems do not get worse."
      },
      {
        "type": "p",
        "text": "We offer a comprehensive range of services tailored to meet your needs, including:"
      },
      {
        "type": "li",
        "text": "Advising on Business plans: we work closely with our clients to develop effective strategies and action plans, ensuring that their legal objectives are achieved."
      },
      {
        "type": "li",
        "text": "Calculating damages and costing litigation matters: our meticulous approach allows us to accurately assess damages and estimate the costs involved in litigation, providing our clients with a clear understanding of the financial implications."
      },
      {
        "type": "li",
        "text": "Initiating actions and responding to actions: whether you need assistance in initiating legal actions or responding to actions filed against you, our team will guide you through the process, ensuring your rights are protected."
      },
      {
        "type": "li",
        "text": "Obtaining, discovering and managing evidence: we understand the importance of strong evidence in building a compelling case. Our lawyers are skilled in gathering, discovering and managing evidence to support your legal arguments."
      },
      {
        "type": "li",
        "text": "Court case management: navigating the complexities of court proceedings can be overwhelming. Our team will provide expert guidance and manage your case diligently, ensuring that all necessary steps are taken and deadlines are met."
      },
      {
        "type": "li",
        "text": "Briefing of counsel: when appropriate, we collaborate with experienced barristers to strengthen your legal representation, briefing them thoroughly on your case to ensure the best possible outcome."
      },
      {
        "type": "li",
        "text": "Negotiating settlements and terms: we strive to achieve favorable outcomes through skillful negotiation. Our lawyers are adept at reaching settlements that protect your interests and avoid protracted litigation."
      },
      {
        "type": "li",
        "text": "Drafting affidavits and orders: our attention to detail shines through in the drafting of affidavits and orders, ensuring accuracy and clarity in all legal documentation."
      },
      {
        "type": "li",
        "text": "Acting on default judgments: in cases where default judgments have been entered against you, we can assist in taking the necessary steps to challenge or set aside those judgments."
      },
      {
        "type": "li",
        "text": "Acting in interlocutory proceedings: our lawyers are experienced in handling interlocutory proceedings, including injunctions and other interim applications, to protect your rights and interests throughout the litigation process."
      },
      {
        "type": "li",
        "text": "Enforcing judgments and orders: we provide guidance and support in enforcing judgments and orders, ensuring that you receive the remedies and benefits awarded to you."
      },
      {
        "type": "p",
        "text": "In addition to our civil litigation expertise, Nightingale Lawyers offers comprehensive services to assist businesses at various stages, from start-ups to established enterprises. Our team can provide assistance in the following areas:"
      },
      {
        "type": "li",
        "text": "Business structures: we offer guidance on selecting the most suitable business structure, whether it's a partnership, joint venture, company, trust, or franchise. We also provide support for business restructuring, including partnership dissolutions and corporate restructures."
      },
      {
        "type": "li",
        "text": "Business contracts: we are adept at preparing and reviewing legal contracts, such as purchase or sale agreements, franchise agreements, supply agreements, service agreements, distribution agreements, and partnership agreements. We ensure that the contractual terms are favorable and align with your business goals."
      },
      {
        "type": "li",
        "text": "Commercial disputes and commercial litigation: we handle a wide range of commercial disputes, including breach of contract cases, building and property disputes, debt recovery, partnership disputes, and matters related to corporations law."
      },
      {
        "type": "li",
        "text": "Corporations law: our team can assist with shareholders' agreements, provide advice on corporate governance, and document company administrations."
      },
      {
        "type": "li",
        "text": "Franchises: if you are considering entering a franchise agreement, we offer comprehensive review and guidance to ensure you have a clear understanding of the associated risks and obligations."
      },
      {
        "type": "li",
        "text": "Copyright, trademarks, and patents: we provide assistance in managing and enforcing your intellectual property rights, including litigation when necessary. Our services also extend to registering designs, patents, and trademarks."
      },
      {
        "type": "li",
        "text": "Property and leasing: whether you are a landlord or tenant, we can assist with retail leasing and commercial leasing matters. Additionally, we provide guidance and support for the sale or purchase of commercial property."
      }
    ],
    "imageKey": "commercial",
    "sourceUrl": "https://www.nightingalelawyers.com/copy-of-property-law"
  }
];

export const practices: Practice[] = practiceSource.map((practice) => ({
  slug: practice.slug,
  number: practice.number,
  short: practice.short,
  title: practice.title,
  summary: practice.summary,
  body: practice.body as RichBlock[],
  image: assets.practices[practice.imageKey as keyof typeof assets.practices],
  sourceUrl: practice.sourceUrl,
}));

export const servicesPage = {
  "title": "Our Practice Areas",
  "intro": "We have a small office with a diverse practice. That is because we know how to solve problems. Generally we try to resolve matters quickly and costs effectively. The fact that you need a lawyer is a problem in the first place. You know you can trust because we are always cautious of how lawyers notoriously increase stress as opposed to alleviating it. Over the years we have expanded our practice because our clients return with all sorts of issues. We know how to come up with a plan and achieve objectives. You can call us to discuss a plan with no obligation to pay any fees until you decide to act on it.",
  "order": [
    "construction-law",
    "criminal-law",
    "conveyancing",
    "commercial-law",
    "family-law"
  ]
};

export const homeContent = {
  "motto": "We can figure it out together.",
  "practiceHeading": "PRACTICE AREAS",
  "reviewPrompt": "Check out our reviews below.",
  "philosophyHeading": "OUR PHILOSOPHY",
  "philosophy": [
    "Our intent is to act for you in such a way that actually resolves your legal problems. That includes making sure you do not have spend too much time, energy and costs dealing with them. We aim for a fair, quick and cheap resolution at all times. Lawyers are not incentivized to resolve problems quickly but we are. Our philosophy is to act for you as if we were acting for ourselves. Nightingale Lawyers is founded on teamwork, mastery and heart.",
    "We pride ourselves on having a diverse practice because we enjoy solving problems. The legal issues, application and procedures may vary but the stress does not. Truly the problems are fundamentally the same. First we identify your objectives, then foresee and mitigate the risks and finally work together as a team to bring out about the desired resolution. It is not in your best interests to spend all your time and money on lawyers, so how are we helping you by asking you to do that? We apply a strategic approach to all problems. We a",
    "You can speak with us any time and we would love to help you. With good team work, trust and creative thinking we can certainly help you achieve what ever it is you are trying to accomplish. If we cannot we can certainly point you in the right direction. That is why at Nightingale Lawyers, whatever it is, we can figure it out together."
  ],
  "reviewsHeading": "OUR CLIENTS' REVIEWS",
  "contactHeading": "CONTACT US",
  "appointment": "By appointment only",
  "directContact": "Direct Email: hanna@nightingalelawyers.com\nTelephone: 0407 000 007",
  "generalInquiryHeading": "For any general inquiries, please fill in the following contact form:"
};

export const reviews = [
  {
    "name": "Toni Franks",
    "quote": "\"Honest, trustworthy and very straight forward with an unvarnished truth.\""
  },
  {
    "name": "Michelle",
    "quote": "\"Hanna Provided clear and excellent advice to gel me manage a difficult situation. He was professional, patient and empathetic, with a genuine willingness to help. He was also quick to respond to phone calls and emails and his rates are very reasonable.\""
  },
  {
    "name": "Nik Mihajlovic",
    "quote": "\"Highly recommend Hanna with his expertise and advice in regards to my small business. His knowledge of building and construction law has been invaluable...\""
  },
  {
    "name": "Natalie Vashevnik",
    "quote": "\"Really helpful legal advice, on a Sunday no less! Really professional and friendly.\""
  },
  {
    "name": "Dawn Leong",
    "quote": "\"It is our privilege and fortune to have found Hanna from Nightingale Lawyers, a wonderful, dedicated, down to earth lawyer. Just like the company's vision. Hanna is passionate in his work and his experience in building and construction is notably remarkable. His empathy and willingness to fight for us is something we will forever be grateful.\""
  },
  {
    "name": "David Mcevoy",
    "quote": "\"Acted with honesty and integrity, not to mention very approachable.\""
  },
  {
    "name": "Sil Pack",
    "quote": "\"Outstanding, honest, reliable, reasonable, and deserves this 5 star rating.\""
  },
  {
    "name": "Matthew Dargham",
    "quote": "\"Hanna is extremely knowledgeable, professional and down to earth. He makes dealing with legal matters nice and simple, and provides clear direction to ensure the best outcome. I have used Hanna for Property matters and also setting up my Will, and I would highly recommend Nightingale Lawyers for any of your legal needs.\""
  },
  {
    "name": "Jordan Building",
    "quote": "... Without their friendly and helpful advise, it would have been extremely difficult to get through the issues that came up in our building company. A big thank you from Trish at Jordan Building Group and my team."
  }
];

const teamSource = [
  {
    "imageIndex": 0,
    "role": "Principal Lawyer",
    "name": "Hanna Ayoub",
    "bio": [
      "Hanna is the founder of Nightingale Lawyers.",
      "Since 2010, Hanna has practiced for prestigious firms in Sydney CBD, the Western Suburbs and Wollongong NSW.",
      "In 2017, Hanna founded his own practice because he believes being a lawyer is a public service before it is a private profession.",
      "At all times, Hanna is your point of contact at Nightingale Lawyers."
    ],
    socials: [

      {
        type: "linkedin",
        label: "LinkedIn",
        href: "https://au.linkedin.com/in/hanna-ayoub-07017b5b",
      },
      {
        type: "email",
        label: "Email",
        href: "mailto:Hanna@nightingalelawyers.com",
      }
    ],
  },
  {
    "imageIndex": 1,
    "role": "Solicitor / Paralegal Team Leader",
    "name": "Rachel Ayoub",
    "bio": [
      "Rachel is a lawyer and the engine of the team. She assists in every part of the office.",
      "On one hand, she assists Hanna in dealing with legal details. She is an incredible researcher, with a great legal mind, who can perceive and narrow the issues. Rachel knows how to find the cases and law to back up Hanna's advice. She is an incredible researcher who is integral to the team's success.",
      "On the other hand Rachel makes sure the tasks that are delegated by Hanna are promptly achieved. She manages the paralegals and has managed a team of three at one point in time. Once the fledgling paralegals take flight Rachel releases them to greater heights in the profession."
    ],
    socials: [
      {
        type: "email",
        label: "Email",
        href: "mailto:Rachel@nightingalelawyers.com",
      }
    ],
  },
  {
    "imageIndex": 2,
    "role": "Paralegal",
    "name": "Stephanie Chahwan",
    "bio": [
      "Stephanie is a law student with Western Sydney University. Stephanie is the 5th law student to work with Nightingale Lawyers and is responsible for learning our ways and undertaking drafting, researching and reviewing.",
      "Nightingale Lawyers is proud to assist young paralegals become lawyers. Stephanie's predecessors have all moved on to other successful careers in the profession and we stay in regular contact.",
      "If you are interested in becoming a paralegal please email our team leader."
    ],
    socials: [],
  },
  {
    "imageIndex": 3,
    "role": "Paralegal / Accounts Manager",
    "name": "Sylvie Tannous",
    "bio": [
      "Sylvie is responsible for the administration of the office. Working closely with Rachel she makes sure the administration is undertaken efficiently and effectively so that Hanna, the principal lawyer, can work with you personally on your matters."
    ],
    "socials": []
  }
];

export const team = teamSource.map((member) => ({
  role: member.role,
  name: member.name,
  bio: member.bio,
  socials: member.socials,
  image: assets.team[member.imageIndex],
}));

export const aboutContent = {
  "title": "Our Philosophy... Continued.",
  "teamHeading": "Meet the Team",
  "teamIntro": "Our team is comprised of lawyers and paralegals. Each member of our team brings unique expertise to the table, allowing us to provide the best legal advice and support to our clients. Click on each team member to find out more about them.",
  "philosophy": [
    "We have a small team and a large practice area. You may think that this is a negative thing but let us demonstrate why it is not. We believe we have the perfect team; a couple of lawyers and paralegals, so that we can remain focused on you and not the size and expense of our office.",
    "Your foremost problem is having to deal with a lawyer in the first place. If you are spending so much money on lawyers that your legal fees eclipse your liability then what have you accomplished? We have a large practice area because our clients have all sorts of problems and we are there for them to resolve those problems in the most efficient way possible.",
    "We firmly believe that empathy is the cornerstone of effective legal representation. A lawyer must possess the ability to step into their clients' shoes and act for them as if they were acting for themselves. This means making sure that the problem is resolved quickly but an ordinary lawyer is not incentivised to resolve problems quickly because how else would they get paid? By understanding our clients on a deeper level, we can provide tailored and compassionate advice, laying the foundation for a good plan you can see through to achieve your objective.",
    "All problems are ultimately the same. To solve a problem requires: faithfully and diligently investigating the issues; understanding the intent and desired resolution; identifying the express and implied objectives to achieve the end-state; foreseeing problems to mitigate risk; and then having the will to act diligently until the end-state is achieved. The other half of this formula is being a good listener, communicating effectively, having empathy and mutual respect for your fellow human. We apply this formula to every matter we are involved in, that is why we are successful with a small team that has a large practice area.",
    "Creativity is another essential aspect that shapes our approach to the practice of law. We recognise that the interpretation and application of legal principles require innovative thinking and resourcefulness. We approach each case with a creative mindset, exploring unique solutions and strategies to achieve our clients' objectives.",
    "At the heart of Nightingale Lawyers lies an unwavering commitment to being good people. We are driven by a genuine passion for helping others. We are invested in your success, treating your problems as if they were our own and working tirelessly to achieve your objectives.",
    "These guiding principles define the essence of Nightingale Lawyers and permeate every aspect of our practice. With teamwork, mastery and heart we are committed to solving your problems and alleviating your stress. That is why we firmly stand by our motto we can figure it out together."
  ]
};

export const contact = {
  phoneDisplay: "0407 000 007",
  phoneHref: "+61407000007",
  email: "Hanna@nightingalelawyers.com",
  teamEmail: "Rachel@nightingalelawyers.com",
  appointment: "By appointment only",
  linkedin: "https://www.linkedin.com/company/nightingale-lawyers/",
};

export const contactPage = {
  "title": "Contact Information",
  "intro": [
    "At Nightingale Lawyers we are dedicated to providing our clients with personalised legal services. If you have any questions or would like to schedule a consultation with our Principal Lawyer Hanna Ayoub. Our team will be in touch and Hanna will personally answer your questions and provide you with legal advice.",
    "You can reach us by phone, email, or by filling out the contact form below. We look forward to hearing from you and helping you with your legal needs."
  ],
  "chatHeading": "Let's Chat",
  "phoneLabel": "Phone",
  "phone": "0407 000 007",
  "emailsLabel": "Emails",
  "email": "Hanna@nightingalelawyers.com",
  "teamEmail": "Rachel@nightingalelawyers.com",
  "socialLabel": "Social Media",
  "linkedin": "https://www.linkedin.com/company/nightingale-lawyers/"
};

export const blogPost = {
  "slug": "welcome-a-law-firm-wollongong-online-frontier",
  "title": "Welcome Law Firm Wollongong - A Law Firm's Online Frontier",
  "author": "hanna9463",
  "published": "Jun 6, 2023",
  "readTime": "3 min read",
  "updated": "Updated: Oct 6, 2023",
  "caption": "Law Firm Wollongong",
  "body": [
    "In the digital age, a strong online presence is vital for any business, and the legal industry is no exception. We are thrilled to introduce our new website for our Law Firm Wollongong, Nightingale Lawyers, representing a significant milestone for our law firm. As we embark on this exciting journey, we want to extend a warm welcome to all our clients, both new and existing. Our redesigned website serves as a gateway to enhanced accessibility, information, and engagement, enabling us to better serve your legal needs. In this blog post, we'll take you on a tour of our website's key features and explain how they can benefit you.",
    "User-Friendly Interface:",
    "At the forefront of our website's redesign was creating a user-friendly interface that simplifies navigation and ensures a seamless browsing experience. With intuitive menus, clear categories, and optimized search functionality, finding the information you need is easier than ever. Whether you're searching for specific legal services, attorney profiles, or testimonials from prior clients, our website's architecture has been crafted with your convenience in mind.",
    "Comprehensive Legal Services:",
    "Our website showcases the broad range of legal services we offer. From building and construction law to corporate litigation and criminal matters, we have a dedicated team of skilled attorneys ready to provide expert guidance in their respective fields. Each practice area page provides a comprehensive overview of the services we offer, along with relevant resources and case studies, giving you a deeper understanding of our expertise and successes.",
    "Attorney Profiles and Expertise:",
    "We believe that establishing a personal connection is crucial in the legal profession. To help you get acquainted with our team, we have introduced detailed attorney profiles on our website. These profiles highlight the qualifications, experience, and areas of specialization of each attorney, allowing you to make an informed decision when selecting legal representation. Furthermore, you can learn more about our team's accomplishments and track record of success through our attorneys' individual case histories and testimonials.",
    "News and Insights:",
    "Keeping our clients informed about the latest legal developments and industry trends is a priority for us. Our website features a dedicated news and insights section where you can find articles, blog posts, and thought leadership pieces authored by our attorneys. Whether it's legislative changes, landmark court cases, or practical legal advice, our content aims to empower and educate you. We encourage you to explore our resources regularly, as we update them frequently to ensure you have access to the most up-to-date information.",
    "Streamlined Contact and Communication:",
    "We understand that prompt communication is vital in the legal field. To facilitate this, our website offers streamlined contact options, allowing you to reach out to us easily. Whether you prefer traditional phone calls or digital channels like email or live chat, we have multiple avenues for you to connect with our team. Additionally, we have integrated an appointment scheduling system, enabling you to book consultations conveniently and efficiently.",
    "As we embark on this new digital chapter, we are excited to extend our warmest welcome to you on our revamped website. Our goal is to make your journey through our online platform as seamless and informative as possible, allowing you to access the legal services and information you need with ease. We invite you to explore our website's various features, get to know our talented team, and take advantage of the resources we have made available to you. Thank you for joining us on this exciting venture, and we look forward to serving your legal needs through our enhanced online presence."
  ],
  "metaDescription": "In the digital age, a strong online presence is vital for any business, and the legal industry is no exception. We are thrilled to introduce our new website for our Law Firm Wollongong, Nightingale Lawyers, representing a significant milestone for our law firm.",
  "sourceUrl": "https://www.nightingalelawyers.com/post/welcome-a-law-firm-wollongong-online-frontier",
  "image": "https://static.wixstatic.com/media/nsplsh_c9cf13580b4e4d229c8c5cc3c76b29f9~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_c9cf13580b4e4d229c8c5cc3c76b29f9~mv2.jpg"
};

export const legacyRouteRedirects = {
  "/service-1": "/construction-law",
  "/copy-of-service-1": "/criminal-law",
  "/copy-of-criminal-law-1": "/family-law",
  "/copy-of-criminal-law": "/conveyancing",
  "/copy-of-property-law": "/commercial-law",
  "/practice-areas/construction-law": "/construction-law",
  "/practice-areas/criminal-law": "/criminal-law",
  "/practice-areas/family-law": "/family-law",
  "/practice-areas/conveyancing": "/conveyancing",
  "/practice-areas/commercial-law": "/commercial-law",
  "/practice-areas": "/services",
  "/contact": "/contact-us",
  "/post/welcome-a-law-firm-wollongong-online-frontier": "/blog/welcome-a-law-firm-wollongong-online-frontier",
} as const;
