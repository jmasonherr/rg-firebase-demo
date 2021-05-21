export const FormC = `
\\documentclass{article}
\\include{docgen_values}
%\\usepackage{soul} %for correct formatting of underlines
%\\usepackage{enumitem} %for lists without bullet points
%\\usepackage[raggedright]{titlesec} %no line breaks in section 
%\\newcommand{\\sectionbreak}{\\clearpage} % begin new page with each section
\\usepackage{indentfirst} %indent every first paragraph 
%\\usepackage[none]{hyphenat} %No Word Splitting
\\usepackage{ragged2e} %justifying
\\usepackage{hyperref} % For creating hyperlinks
\\usepackage{xcolor} % For Coloring text (mainly for linkz)
\\renewcommand{\\labelenumii}{\\theenumii}
\\usepackage{graphicx}
\\usepackage{booktabs}
\\usepackage{tabularx,rotating}
\\usepackage[margin=1in]{geometry}
%-----center sections, subsections, subsubsections-----%
%\\titleformat{\\section}[hang]{\\Large\\bfseries\\filcenter}{}{}{}
%\\titleformat{\\subsection}[hang]{\\large\\bfseries\\filcenter}{}{}{}
%\\titleformat{\\subsubsection}[hang]{\\bfseries\\filcenter}{}{}{}
%--------%f
\\setlength{\\parindent}{0pt} %noindent
\\title{\\textbf{\\issuer{} Form C for a Regulation Crowdfunding Securities Offering}}
\\author{}
\\date{\\today{}}
\\begin{document}

\\maketitle{}

\\begin{center}
\\noOfSecurityOffered{} \\financingType{} securities offered \\\\
under Section 4(a)(6) of the Securities and Exchange Act of 1933.\\\\

Offered at \\$\\price{} per unit  \\\\
From \\offeringStart{} to \\deadlineDate{} \\\\
Filed through Raise Green, Inc \\\\

\\end{center}
\\newpage
%\\tableofcontents
% TOC won't work unless several compilations of pdftaex, docgen currently only does 1 https://stackoverflow.com/questions/3863630/latex-tableofcontents-command-always-shows-blank-contents-on-first-build

\\newpage

\\section{Disclosures}
%\\addcontentsline{toc}{section}{Disclosures}

\\begin{itemize}
    \\item A crowdfunding investment involves risk. 
    \\item You should not invest any funds in this offering unless you can afford to lose your entire investment.
    \\item In making an investment decision, investors must rely on their own examination of the issuer and the terms of the offering, including the merits and risks involved. 
    \\item These securities have not been recommended or approved by any federal or state securities commission or regulatory authority. Furthermore, these authorities have not passed upon the accuracy or adequacy of this document.
    \\item The U.S. Securities and Exchange Commission (SEC) does not pass upon the merits of any securities offered or the terms of the offering, nor does it pass upon the accuracy or completeness of any offering document or literature. 
    \\item These securities are offered under an exemption from registration; however, the SEC has not made an independent determination that these securities are exempt from registration or otherwise qualify for any potential exemption.
\\end{itemize}
Past performance is not a guarantee of future results. \\\\

This disclosure document contains forward-looking statements and information relating to, among other things, the Company, its business plan and strategy, and its industry. These forward-looking statements are based on the beliefs of, assumptions made by, and information currently available to the Company’s management. When used in this disclosure document and the Company’s Offering materials, the words “estimate”, “project”, “believe”, “anticipate”, “intend”, “expect”, and similar expressions are intended to identify forward-looking statements. These statements reflect management’s current views with respect to future events and are subject to risks and uncertainties that could cause the Company’s actual results to differ materially from those contained in the forward-looking statements. Investors are cautioned not to place undue reliance on these forward-looking statements. Except as required by law, we undertake no obligation to update publicly any forward-looking statements for any reason after the date of this Offering or to conform these statements to actual results or to changes in our expectations. \\\\

The Company has certified that all of the following statements are TRUE, in all material respects, for the Company in connection with this Offering: (1) Is organized under, and subject to, the laws of a State or territory of the United States or the District of Columbia; (2) Is not subject to the requirement to file reports pursuant to Section 13 or Section 15(d) of the Securities Exchange Act of 1934, as amended (the “Exchange Act”) (15 U.S.C. 78m or 78o(d)); (3) Is not an investment company, as defined in Section 3 of the Investment Company Act of 1940 (the “Investment Company Act”) (15 U.S.C. 80a-3), or excluded from the definition of investment company by Section 3(b) or Section 3(c) of the Investment Company Act (15 U.S.C. 80a-3(b) or 80a-3(c)); (4) Is not ineligible to offer or sell securities in reliance on Section 4(a)(6) of the Securities Act of 1933, as amended (the “Securities Act”) (15 U.S.C. 77d(a)(6)) as a result of a disqualification as specified in § 227.503(a); (5) Has filed with the SEC and provided to investors, to the extent required, any ongoing annual reports required by law during the two years immediately preceding the filing of this Form C; and (6) Has a specific business plan, which is not to engage in a merger or acquisition with an unidentified company or companies.

\\subsection*{Bad Actor Disclosure}

The Company is not currently subject to any bad actor disqualifications under any relevant U.S. securities laws.

\\subsection*{Updates}
%\\addcontentsline{toc}{section}{Updates}

If applicable, any updates on the status of this Offering may be found at www.raisegreen.com.

\\section{About this Form C}
%\\addcontentsline{toc}{section}{About this Form C}

You should rely only on the information contained in this Form C when making an investment. We have not authorized anyone to provide you with any additional or different information from that contained in this Form C. We are offering to sell, and seeking offers to buy, the Securities only in jurisdictions where offers and sales are permitted. You should assume that the information contained in this Form C is accurate, in all material respects, only as of the date of this Form C, regardless of the time of delivery of this Form C or of any sale of Securities. Our business, financial condition, results of operations, and prospects may have changed since that date. Statements contained herein as to the content of any agreement(s) or other document(s) are summaries and, therefore, are necessarily selective and incomplete and are qualified in their entirety by the actual agreements or other documents. \\\\

The Company will provide the opportunity to ask questions of and receive answers from the Company’s management concerning terms and conditions of the Offering, the Company or any other relevant matters and any additional reasonable information to any prospective Investor prior to the consummation of the sale of the Securities. This Form C does not purport to contain all of the information that may be required to evaluate this Offering and any recipient hereof should conduct its own independent analysis. The statements of the Company contained herein are based on information believed to be reliable. No warranty can be made as to the accuracy of such information or that circumstances have not changed since the date of this Form C. \\\\

The Company does not expect to update or otherwise revise this Form C or other materials supplied herewith. The delivery of this Form C at any time does not imply that the information contained herein is correct as of any time subsequent to the date of this Form C. This Form C is submitted in connection with the Offering described herein and may not be reproduced or used for any other purpose.\\\\

As of the date hereof, this Offering is available for sale into all 50 states, Washington D.C., and US territories. Restrictions on reselling are detailed in Appendix on ‘General Information About Crowdfunding Process’.

\\subsection*{Signature}

Pursuant to the requirements of Sections 4(a)(6) and 4A of the Securities Act of 1933 and Regulation Crowdfunding (§ 227.100 et seq.), the issuer certifies that it has reasonable grounds to believe that it meets all of the requirements for filing on Form C and has duly caused this Form to be signed on its behalf by a duly authorized undersigned.
\\\\

\\bigskip{}
 
\\underline{\\hspace{5cm}} \\\\
Signature \\\\

\\underline{\\issuerManagingMemberNameFirst{} \\issuerManagingMemberNameLast{}} \\\\
Managing Member Name \\\\

\\underline{\\issuerManagingMemberTitle{}} \\\\
Managing Member Title \\\\

\\underline{\\issuer{}} \\\\
Company


\\newpage

\\section{Business Information}
%\\addcontentsline{toc}{section}{Business Information}

\\issuer{} is a Limited Liability Corporation that was incorporated in the State of \\issuerJurisdictionOrganization{} on \\issuerDateOfIncorporation{}. \\\\

The physical address of the company is \\issuerAddressLineOne{} \\issuerAddressLineTwo{} \\issuerAddressCityOrTown{}, \\issuerAddressStateOrProvince{} \\issuerAddressPostalZipCode{}. Their digital address is the website \\underline{\\issuerWebsite{}}. \\\\


\\section{Business Plan}
%\\addcontentsline{toc}{section}{Business Plan}

\\issuer{} finances community-scale solar projects in \\issuerJurisdictionOrganization{}.\\projectDescription{}. \\developerGovernanceStructure{}. \\\\

The contracted cash flows from the sale of clean electricity and any associated renewable energy certificates will serve as the main sources of revenue and potential profits for investors. \\\\

\\projectBackgroundCommunity{}

\\section{Sales, Supply Chain, and Customer Base}
%\\addcontentsline{toc}{section}{Sales, Supply Chain, and Customer Base} \\\\
The supply chain has low-risk because the Company is  planning to sign a \\powerPurchaseAgreementContractTermsPPATerm{} year long Power Purchase Agreement, which would provide contractually-backed revenue. All parties have expressed interest in moving forward with the project. 

\\powerPurchaseAgreementDescription{} 

\\engineeringProcurementAndConstructionContractorBackground{} 

\\section{Directors and Officers}
%\\addcontentsline{toc}{section}{Directors and Officers}

\\underline{\\issuerManagingMemberNameFirst{} \\issuerManagingMemberNameLast{}, \\issuerManagingMemberTitle{}} \\\\

\\developerExecutiveBios{} 

Last 3 years employment: \\issuerManagingMemberEmploymentHistory{}.

This is a \\personEmploymentFullTimePartTime{} position. \\issuerManagingMemberNameFirst{} \\issuerManagingMemberNameLast{} allocates approximately \\managingMemberHours{} hours per week. Their principal occupation is \\issuerManagingMemberPrincipalOccupation{}. 

\\subsection*{Number of Employees}
\\currentEmployees{} employees. 

\\section{Beneficial Owners}
%\\addcontentsline{toc}{section}{Beneficial Owners} \\\\

\\issuerManagingMemberNameFirst{} \\issuerManagingMemberNameLast{} is one of the \\issuerBeneficialOwnerNumber{} beneficial owners of \\issuer{}. \\\\

They own the only “Founders Units”, which are the voting equity securities described in detail in the Ownership and Capital Structure section of this filing. The Founders Units in aggregate represent 100\\% of the outstanding voting equity securities, calculated on the basis of voting power. \\\\

Other beneficial owners include: \\underline{\\hspace{5cm}}.  

\\section{Competition}
%\\addcontentsline{toc}{section}{Competition}

The supply chain has low-risk because the Company is planning to sign a \\powerPurchaseAgreementContractTermsPPATerm{} year long Power Purchase Agreement, which would provide contractually-backed revenue. All parties have expressed interest in moving forward with the project. \\\\

There is a potential that circumstances could cause \\offtakerName{} to breach (break) the contract, at which point, \\issuer{} would lose its contracted revenue and be forced to find an alternative purchaser of electricity generated by the solar project, potentially at a much lower price than the price per kilowatt hour that was secured in the Power Purchase Agreement. \\\\

If the parties are able to agree on the Power Purchase Agreement, and no breach occurs, our business will be subject to minimal competition. However, open markets, such as the electricity market, are always competitive which makes any projects that may be developed by \\issuer{} subject to the same level of competitiveness as other rooftop residential or community solar owning businesses.  The degree of competition could be reasonably calculated based on widely-accepted practices for evaluation of the concentration of the market. 


\\section{Risk Factors}
%\\addcontentsline{toc}{section}{Risk Factors} 

Herein lies a discussion of the material factors that make an investment into NHCS speculative or risky, that we have identified.

\\subsection*{Uncertain Risk}

An investment in the Company (also referred to as “we”, “us”, “our”, or “Company) involves a high degree of risk and should only be considered by those who can afford the loss of their entire investment. Furthermore, the purchase of any of the company's securities should only be undertaken by persons whose financial resources are sufficient to enable them to indefinitely retain an illiquid investment. Each investor in the Company should consider all of the information provided to such potential investor regarding the Company as well as the following risk factors, in addition to the other information listed in the Company’s Form C reports. The following risk factors are not intended and shall not be deemed to be a complete description of the commercial and other risks inherent in the investment in the Company. 

\\subsection*{Forward Looking Statements} 

Certain information contained in this Form C (Offering Memorandum) constitute “forward-looking statements” that can be identified by the use of forward-looking terminology such as “may”, ''will, ''should”, “expect”, “anticipate”, “intend”, “continue”, or “believe” or the negatives or variations thereof, inter alia. Furthermore, any forecasts or other estimates in this Offering Memorandum relating to the Company, its business plan and strategy, or its industry, including estimates of returns or performance, and “forward-looking statements” and are based on the beliefs of, assumptions made by and information currently available to the Company's Management, which beliefs, assumptions, and information may change. Due to various risks and uncertainties, actual events or the results or the actual performance of the Securities may differ materially from those contemplated in such forward-looking statements, which statements reflect management's current views with respect to future events. Moreover, actual events are difficult to project and often depend upon factors that are beyond the control of the Company. Investors are cautioned not to place undue reliance on these forward-looking statements which speak only as of the date on which they are made. Neither the delivery of this Form C at any time nor any sale hereafter shall under any circumstances create an implication that the information contained herein is correct as of any time after the earlier of the relevant date specified herein or the date of this Form C The Company does not undertake any obligation to revise or update these forward-looking statements to reflect events or circumstances after such date or to reflect the occurrence of unanticipated events. 

\\subsection*{Valuation Speculation} 

The valuation for offering was established by the Company, as is the case with any future offerings that the company may make. Unlike listed companies that are valued publicly through market-driven stock prices, the valuation of private companies, especially startups, is difficult to assess and investors risks overpaying or underpaying for their investment.

\\subsection*{Undercapitalization}

We estimate that we will require \\$\\systemEngineeringProcurementAndConstructionCost{} (dollars) to install the solar project and commence commercial operations of the project. We intend to finance the commercial production of the  project, and potentially future solar arrays through Regulation Crowdfunding to raise additional equity as needed. If we are unable to do so we may need to raise money from bank loans, short-term debt, future sales of securities, or some combination thereof. 

\\subsection*{Transfer Rights} 

Any units purchased through this crowdfunding campaign are subject to SEC limitations of transfer. This means that the units that a prospective shareholder may purchase cannot be resold for a period of one year in most cases. The exception to this rule is if the shareholder is transferring the unit back to the Company through a stock repurchase; to an accredited investor; as part of an offering registered with the Commission; to a member of their family; a trust created for the benefit of their family; or in connection with their death or divorce. 

\\subsection*{Key Personnel} 

To be successful, the Company requires capable people to run its day to day operations. As the Company grows, it may on occasion need to attract and hire additional employees or contract out services in sales, marketing, design, development, operations, finance, legal, human resources, and other areas. Depending on the economic environment and the Company's performance, we may not be able to locate or attract qualified individuals for such positions when we need them. We may also make hiring mistakes, which can be costly in terms of resources spent in recruiting, hiring and investing in the incorrect individuals and in the time delay in locating the right employee fit. If we are unable to attract, hire, and retain the right talent or make too many hiring mistakes, it is likely that our business will suffer from not having the right employees in the right positions at the right time. This would likely adversely impact the value of a shareholder’s investment. 

\\subsection*{Liability Prone} 

The Company may still be involved in lawsuits for its activities. The potential lawsuits can harm the business projections of the Company and therefore may harm the company.

\\subsection*{Long-Term Investment with Limited Liquidity} 

Shareholders and prospective investors should be prepared to hold this investment for the long-term. For the 12 months following an investment there will be restrictions on how the shareholder can resell the securities they receive. More importantly, there is no established market for these securities and there may never be one. As a result, if a shareholder decides to sell these securities in the future, they may not be able to find a buyer. The company may be acquired by an existing player in the solar, energy, housing, or project development industry. However, that may never happen or it may happen at a price that results in shareholders losing money on this investment. 

\\subsection*{Uncertainty in Solar Production} 

Our financial models rely on forecasting power production. These estimates are created by using the National Renewable Energy Laboratory estimates of solar insolation for New Haven, Connecticut. There is uncertainty associated with these estimates. If the estimates are below the actual generation, the solar panels will produce less electricity and the company will generate less revenue. However, the estimates could be under-predictions as well, which could create potential financial upsides if the actual solar insolation is greater than modeled.

\\subsection*{Force Majeure}

Solar panels rely on a clean surface that is free from damage. There is the possibility that a natural disaster such as a storm could cause damage to the solar array. This may cause unexpected replacement costs and threaten the financial returns for shareholders. Our current solar array, which is owned by NHCS \\#1, is covered under the Columbus House’s property insurance for the Button Street property to cover the replacement costs for potential damage, but all possible damage may or may not be covered by the insurance company.

\\subsection*{Changes in Policy}

Excess generation not consumed by residents at the property will be sold to the local investor owned utility company. Currently, this is purchased at a rate that is calculated as the average hourly Connecticut Independent System Operator of New England real time location marginal price for the hours of 10 am to 4 pm during the annual period. If the regulations change this policy, this may reduce or increase the amount of profit received by NHCS. Additional changes in the policy framework surrounding our business including but not limited to: renewable energy, crowdfunded equity, and relevant corporate and business related law and regulation may also have unanticipated consequences for the Company. 

\\subsection*{Software and/or hardware failures} 

With all technology, there is a possibility of having unexpected software and/or hardware failures. If this occurs, it would require repair or replacement. This would inhibit the operation until repaired or replaced, and create an additional cost burden to the Company, reducing the profit margin for the investors. 

\\subsection*{Power Purchase Agreement or Breach of Contract} 

There is a possibility that the Power Purchase Agreement for the  project is not agreed to, and if it is agreed to there could be a breach of the Power Purchase Agreement or other contracts associated with that project. If this occurs, payments from the sale of electricity could be delayed or stopped. This could disrupt our cash flow models and cause the company to have to take measures to remedy the breach, which may in turn impair the projected cash flows and any potential dividend to investors from those cash flows.

\\subsection*{Monetization of the Federal Tax Credit}

This sale or transfer of ownership, either to Columbus House, or to a third party buyer, may be necessary to monetize the Investment Tax Credit and ensure the profitability of the investment. The Federal Investment Tax Credit is a tax credit of 30\\% of an installed solar system. A portion of the tax credit can be carried forward to reduce tax burdens.  If the project is able to attract a legal entity that has sufficient tax burden and that has an interest in partnering on the project, the Company may enter a tax equity partnership flip agreement to capture and monetize the full tax benefits as available.  This scenario may increase unit holder profitability.  There is a risk the company will not find such a partner, may not be sold to a company that can monetize this tax credit, or will be sold directly to the offtaker which cannot monetize the tax credit as a 501(c)(3) tax-exempt organization.

%\\underline{Failure to receive ZRECs} \\\\

%Connecticut’s Public Act 11-80 passed into law July 2011 established the Zero Emissions Renewable Energy Credit Program. This program requires two public utilities, including United Illuminating, to purchase “Zero Energy Renewable Energy Credits (ZRECs)” from the owners of renewable energy systems in Connecticut. The utilities are required to pay a fixed ZREC price to system owners for 15 years. There is a risk our ZREC application could be denied, which would decrease unit holder profitability. NHCS was able to successfully receive approval for ZRECs on the Button Street Project which is currently selling ZRECs for \\$98 per megawatt-hour (MWh).  \\\\

\\subsection*{Estimate Business Projections} 

There can be no assurance that the company will meet our projections. There can be no assurance that the company will be able to find sufficient demand for our product, that people think it’s a better option than a competing product, or that we will be able to provide the service at a level that allows the company to make a profit and still attract business.The Company’s projected internal rate of return (IRR) in the Form C are presented as forward-looking statements that estimate company’s return on capital investment. They are based on sensitivity analysis that incorporate solar upside and downside including variations in pricing of RECs, capital expenditures, capacity factors, operation, and maintenance costs, tax benefits capture scenarios, and percentage of electricity sold at wholesale rates, estimated off of a series of assumptions and inputs some of which came from the Power Purchase Agreement for the project. Investors are cautioned not to place undue reliance on these forward-looking statements, which speak only as to the date on which they are made. 

\\subsection*{Engineering, Procurement, and Construction (EPC).}

We depend on EPC contractors and subcontractors to install solar arrays for our projects and conduct our operations. Our ability to meet obligations to customers and partners may be adversely affected if suppliers or subcontractors do not perform the agreed-upon services in compliance with customer requirements and in a timely and cost-effective manner. Our suppliers may be less likely than us to be able to quickly recover from natural disasters and other events beyond their control and may be subject to additional risks such as financial problems that limit their ability to conduct their operations. The risk of these adverse effects may be greater in circumstances where we rely on only one or more subcontractors. 

\\subsection*{Additional Identified Risks}
\\formCRiskFactors{}

\\section{Ownership and Capital Structure}
%\\addcontentsline{toc}{section}{Ownership and Capital Structure}
The follow tables summarize the rights of Common Unitholders and Founders Unithholders.
\\bigskip{}

% \\addcontentsline{toc}{section}{Common Units}
\\begin{tabular}{| p{1in} | p{5.5in} | }
%\\textbf{Type of Security} & \\textbf{Non-Voting Member Units (Common Units)} \\\\
\\hline
\\multicolumn{2}{|l|}{\\textbf{Common Units (Non-voting Member Units)}} \\tabularnewline
\\hline
Amount Outstanding & \\issuer{} has issued \\commonUnitOutstanding{} Non-Voting Member Units.\\\\
\\hline
Voting Rights &The holders of Non-Voting Member Units are not entitled to vote on any matter except as required under applicable law, or as described in the Operating Agreement. \\\\
\\hline
Minority Holder & 
\\issuer{} has authorized the sale of Non-Voting Member Units through an exempt offering under Section 4(a)(6) of the Securities Act of 1933. The holders of Non-Voting Member Units are not entitled to vote on any matter except as required under applicable law, or as described in the Operating Agreement. Minority holders of Non-Voting Member Units will have limited ability, if any, to influence Company policies or any other corporate matters, including the election of directors, changes to the Company’s governance documents, additional issuances of securities, company repurchase of securities, a sale of the Company or of assets of the Company, transactions with related parties. The management team may at times call upon holders of Non-Voting Member Units to participate in a special vote, such as in the instance of a sale, consistent with the Operating Agreement.  \\\\
\\hline
Dilution &Investors should understand the potential for dilution. Each investor’s stake in the Company, could be diluted due to the Company issuing additional shares. In other words, where the Company issues more shares, the percentage of the Company that an existing shareholder owns will decrease, even though the value of the Company may increase. The end result of dilution is that shareholders would own a smaller piece of a larger company. This increase in the number of shares outstanding could result from a unit offering, employees exercising stock options, or by conversion of certain instruments into units. If you are making an investment expecting to hold a certain percentage of the Company or expected each unit to hold a certain amount of value, it is important to realize how the value of those units can decrease by actions taken by the Company. Dilution can make drastic changes to the value of each unit, ownership percentage, voting control, and earnings per unit.\\\\
\\hline
 Distribution Rights &Subject to preferences and decisions that may be granted to outstanding Founder Units, the holders of Common Units are entitled to ratably receive a distribution, as declared by the Managers, from funds legally available to shareholders. The payment of distributions on the Common Units will be a business decision to be made by the Managers annually based upon the results of our operations and our financial condition and any other factors that our Managers consider relevant. Payment of distributions on the Common Units may be restricted by law and by loan agreements, indentures and other transactions entered into by us from time to time. The Company has never paid a distribution, but does intend to track cash flows and pay distributions where possible in the future. Shareholders may not receive any return on their investment from distributions, may receive a regular distribution payment, or may receive a lump distribution payment in the event of a sale or other liquidity event. \\\\
\\hline
Liquidation and Distributions &In the event of our liquidation, dissolution, or winding up, holders of Common Units are entitled to share ratably in all of our assets remaining after payment of liabilities and the liquidation preference of any then outstanding founder units. \\\\
\\hline
Rights and Preferences & The rights, preferences, and privileges of the holders of the company’s Non-Voting Member Units (Common Units) are subject to and may be adversely affected by, the rights of the holders of shares of any founder units and any additional classes of preferred units that we may designate in the future. \\\\
\\hline
Transferability &For a year, the securities can only be resold: in an IPO, to the Company, to an accredited investor, and to a member of the family of the purchaser or the equivalent, to a trust controlled by the purchaser, to a trust created for the benefit of a member of the family of the purchaser or the equivalent, or in connection with death or divorce of the purchaser or other similar circumstances. \\\\
\\hline
Tax Considerations &\\issuer{} elected to be taxed as a C-Corp rather than an LLC, to make tax forms simpler for its investors (i.e. dividends taxed with 1099-DIV instead of a K-1). \\\\
\\hline 
\\end{tabular} 


%\\addcontentsline{toc}{section}{Founders Units}
\\begin{tabular}{| p{1in} | p{5.5in} | }
\\hline
\\multicolumn{2}{|l|}{\\textbf{Founders Units}} \\tabularnewline
%\\textbf{Type of Security} & \\textbf{Founders Units}  \\\\

\\hline
Amount Outstanding &\\formCUnitsFoundersUnitsOutstanding{} \\\\
\\hline
Voting Rights &The holders of shares of the Company’s Founder Units are entitled to one vote for each share held of record on all matters submitted to a vote of the shareholders. \\\\
\\hline
Dilution &Investors should understand the potential for dilution. Each investor’s stake in the Company, could be diluted due to the Company issuing additional shares. In other words, where the Company issues more shares, the percentage of the Company that a given shareholder own will decrease, even though the value of the Company may increase. The end result of dilution is that shareholders would own a smaller piece of a larger company. This increase in the number of shares outstanding could result from a unit offering, employees exercising stock options, or by conversion of certain instruments into unit. If you are making an investment expecting to hold a certain percentage of the Company or expected each unit to hold a certain amount of value, it is important to realize how the value of those units can decrease by actions taken by the Company. Dilution can make drastic changes to the value of each unit, ownership percentage, voting control, and earnings per unit. Upon completion of this offering, new Founders Units may be issued consistent with keeping the ownership percentage of Management at 20\\% of the company’s ownership interest.\\\\
\\hline
Distribution Rights &Holders of shares of Founder Units are entitled to receive ratably such distributions as may be declared by the Managers out of funds legally available therefore as well as any distribution to the shareholders. The payment of distributions on the Founders Units will be a business decision to be made by the Managers annually based upon the results of our operations and our financial condition and any other factors that our Managers consider relevant. Payment of distributions on the Founder Units may be restricted by law and by loan agreements, indentures and other transactions entered into by us from time to time. The Company has never paid a distribution, but does intend to track cash flows and pay distributions where possible in the future. Shareholders may not receive any return on their investment from distributions, may receive a regular distribution payment, or may receive a lump distribution payment in the event of a sale or other liquidity event. \\\\
\\hline
Liquidation and Distributions &In the event of our liquidation, dissolution, or winding up, holders of Founders Units are entitled to share ratably in all of our assets remaining after payment of liabilities. \\\\
\\hline
Rights and Preferences &The rights, preferences, and privileges of the holders of the Company’s Founders Units and any additional classes of preferred units that we may designate in the future, as described in the Operating Agreement. \\\\
\\hline
Tax Considerations &\\issuer{} elected to be taxed as a C-Corp rather than an LLC, to make tax forms simpler for its investors (i.e. dividends taxed with 1099-DIV instead of a K-1). \\\\
\\hline 
\\end{tabular} 
\\bigskip{}

\\newpage
The following table shows the ownership of Founders Units:
\\bigskip{}

\\begin{tabular}{| p{3in} | p{1.75in} | p{1.75in} |}
    \\hline
     \\textbf{Name} & \\textbf{Ownership Percentage} & \\textbf{Founders Units Owned}\\\\
     \\hline
     \\issuerManagingMemberNameFirst{} \\issuerManagingMemberNameLast{} & 100\\% & \\formCUnitsFoundersUnitsOutstanding{} {}\\\\
     \\hline
      & &  \\\\
     \\hline
      &  &  \\\\
     \\hline
\\end{tabular} 
\\newpage

\\section{Valuation Methodology}
%\\addcontentsline{toc}{section}{Valuation Methodology}

The valuation is calculated by the sum of the net present value of the contracted cash flows of \\entityName{} and projected cash flows deriving from the \\projectAddressLineOne{} project based on current parameters of the Power Purchase Agreement contract negotiations, less capital expenditures and other expenses of each respective project, and the Company as a whole.  

\\section{Litigation}
%\\addcontentsline{toc}{section}{Litigation} \\\\

There is no litigation, current or pending, against \\issuer{} or any of its subsidiaries.

\\section{Indebtedness}
%\\addcontentsline{toc}{section}{Indebtedness} 

The company had received \\financialStatementIndebtnessAmount{} in debt from \\financialStatementIndebtnessProviderName{} to be paid back on \\indebtnessType{} with a \\financialStatementIndebtnessInterest{} interest rate. \\financialStatementIndebtnessProviderDescription{}. 

\\section{Exempt Offerings}
%\\addcontentsline{toc}{section}{Exempt Offerings}
\\issuer{} has filed with the SEC and provided to investors, to the extent required, any ongoing annual reports required by law during the two years immediately preceding the filing of this Form C. All company filings, as applicable, are publically available on the SEC’s EDGAR database.

\\section{Financials}
%\\addcontentsline{toc}{section}{Financial Information}\\\\

This Regulation Crowdfunding offering intends to raise capital for a solar project. Consolidated financials for \\issuer{} are shown in the appendix. \\\\

%\\addcontentsline{toc}{section}{Financial Condition} \\\\

\\financialStatementDiscussion{} \\financeOverviewIncentivesDescription{}

\\issuer{} was created exclusively to finance and own solar projects. The first project will be the \\projectAddressLineOne{} project through majority ownership of a special purpose vehicle, a project company to be established upon a successful raise. \\issuer{} may create additional project companies to fund future solar arrays. The company came into existence on \\issuerDateOfIncorporation{} and has not generated any revenues from previous years. 
\\\\

\\issuer{} has not yet generated any revenues and do not anticipate doing so until we have completed construction of the solar array and interconnect agreement to activate the Power Purchase Agreement, which we do not anticipate occurring until a successful raise is completed. The interconnection agreement is a standard document that is generated to approve the connection of a solar power array to the electricity grid. This is done by our EPC contractor, a professional firm with experience obtaining solar interconnections approved with local utilities. Once the interconnection agreement is approved after completion of the installation, the Power Purchase Agreement comes into force and the company begins generating revenue.
\\\\

The Managers will not draw a salary from the Company, and intend to take only what disbursements their Founder Units entitle them to, which are the same as Non-Voting Member Units consistent with the Operating Agreement. The Managers will be reimbursed for any business-related expenses, if purchased with personal capital, that is involved directly in operations of servicing the business in the condition.
\\\\

Company management has provided startup costs in short-term debt to finance the down payment and first phase of construction and installation of the solar array, while the Regulation Crowdfunding listing occurs. The Company has already used a portion of this loan to make some payments to develop the solar array. The interest-free short-term debt will be repaid upon completion of the crowdfunded equity raise. In the event that we successfully raise \\minimumOfferingAmount{} or more, we believe that the short-term debt will have no net bearing on the balance sheet of the company. In the event of unforeseen circumstances delaying the commercial operation date (including but not limited to installation, interconnection, or system functionality issues), this short-term debt may be drawn on to ensure the successful origination and completion of the project.
\\\\

Based on our forecast, with the liquidity of the anticipated target raise amount, we anticipate that we can operate the business for 12 months without revenue generation. This buffer was built in to account for the time required to receive interconnection approval for the sale of power to the local utility. This denomination of \\minimumOfferingAmount{} could carry the project through the construction phase, or through the first 12 months of operations in the event of delays in the construction schedule, or other unforeseen circumstances. This sets aside an operating capital reserve to surmount said circumstances as expeditiously as possible. In the event of oversubscription, the Company would be able to further its aim to achieve profitability to investors through additional use of proceeds that may enhance the value of the project, both monetarily and from provable impact metrics.

\\subsection{Financial Milestones}
%\\addcontentsline{toc}{section}{Financial Milestones} \\\\
\\issuer{} plans create the solar array project if the \\minimumOfferingAmount{} is succesful. Based on current incentive policies and renewable energy credit requirement, Management believes the company will generate positive net income upon approval by the local utility, and interconnection into the grid. We expect the project to generate contracted revenue for \\powerPurchaseAgreementContractTermsPPATerm{} years (with an option to extend the contract in two 5 year increments subject to \\offtakerName{} approval). This contracted purchase of power occurs until sale of the system liquidation, or expiration of the long-term Power Purchase Agreement. After the long-term Power Purchase Agreement contract expires, a new contract will have to be negotiated. The solar panels themselves will be producing power after the duration of the contract so they will still likely be producing value from their production of renewable electricity.
\\\\

Operating cash may be obtained by Management to cover working capital that may be necessary to overcome construction risk if the project is not already in receipt of its Notice to Proceed. Commercial operations commence when the system is installed and interconnected to the grid. Every 5 years after the date of commercial operation, the system may be offered for sale to the Offtaker or a third-party subject to approval by the management team and in consultation with \\offtakerName{}, through a buyback provision written in to the Power Purchase Agreement. This sale or transfer of ownership, may be necessary to monetize the Investment Tax Credit and/or help increase the profitability, liquidity, and payback of the investment. We plan to negotiate the terms of the buyback deal in the best interest of investors and the Offtaker and any proposed sale may trigger a special voting obligation among equity holders. A sale may trigger a liquidity event that would result in a balloon payment of the investor's principal plus any excess returns negotiated into the sale agreement. The sale price for \\entityName{} will be the System’s fair market value (“FMV”) as negotiated by Management and the prospective buyer. A mutually-acceptable third party independent appraiser will be retained to compute the System’s FMV. The Management team would negotiate in good faith to transfer ownership back to the Offtaker  as expeditiously as possible. Such a liquidity event would occur after consultation, and if it is agreed to be in the best interest of the Offtaker, and if it furthers their mission.


\\subsection{Results of Operation}
%\\addcontentsline{toc}{section}{Results of Operation} \\\\

\\issuer{} is a newly-established company to serve as a holding company for a subsidiary project company. \\\\

\\financialStatement{}

\\subsection{Liquidity}
%\\addcontentsline{toc}{section}{Liquidity} \\\\

The company requires continued infusion of new capital to continue business operations through the construction and operating phase of the solar array. If the company is successful in this offering, proceeds will be used to finance the construction of the project and associated fees and maintenance, and potential as future solar projects in line with its mission should the offering succeed in adequate oversubscription to do so, and that it is in the financial interest of the Company. Receiving these crowdfunded proceeds are necessary to the viability of the business. The Company will immediately expend working capital to purchase the solar array and begin or continue construction and commercial operations during and after the raise in order to finance installation and management of the project.
\\\\

If the Company is able to successfully raise \\minimumOfferingAmount{} or more, we believe this would provide the minimum viable ability for the Company to fully finance the proposed project, and bring the project through commercial operations and service it through to the first sale offering (5 years from commercial operation date of the project) and possibly for the duration of the Power Purchase Agreement. At the maximum raise \\maximumOfferingAmount{}, the project company could pioneer the frontiers of community solar usage and management, potentially finance the addition of an accompanying storage unit with the solar array; optimize internal operations for managing cash distributions to equity and other operational measures that allow the management team to better ensure the profitability of the project to investors, and maximize benefit for the Offtaker and the people it serves; conduct and execute on additional project scoping and development in partnerships to design, and potentially install additional community solar arrays to further their mission. Our projections estimate that a raise of \\minimumOfferingAmount{} would enable the project company to service the entire duration of the term of the Power Purchase Agreement while offering affordable clean electricity to the Offtaker to further their mission with maximum positive social, environment, and demonstrable impact.
\\\\

\\subsection{Capital Reserve}
%\\addcontentsline{toc}{section}{Capital Reserve}\\\\

As of \\today{} \\issuer{} has approximately \\totalAssetMostRecentFiscalYear{} in its bank account. \\\\
%\\entityName{} has \\financialStatementProjectCash{}. 

\\subsection{Valuation}
%\\addcontentsline{toc}{section}{Valuation}\\\\

Based on our valuation methodology, and our best available assessment of current operations and future business projections, \\issuer{}, LLC is valued at \\issuerValuationPreMoney{}. We have undertaken modeling efforts to produce a valuation of the Company which include a subsidiary project company, which is determined by taking the discounted cash flow for the next \\powerPurchaseAgreementContractTermsEffectiveDate{} years plus an estimate of cash flows after the expiration of the PPA. The discount rate is set at \\projectFinancingDiscountRate{} percent. The value of the new units are based upon the value of the previous exempt offering and judged to the best of our ability.

\\subsection{Use of Proceeds}
%\\addcontentsline{toc}{section}{Use of Proceeds} \\\\

\\formCUseOfProceedsMinimum{}. \\formCUseOfProceedsOversubscribe{}

\\subsection{Federal Tax Returns} 
%\\addcontentsline{toc}{section}{Federal Tax Returns}

\\issuer{} total income, taxable income, and total tax is presented in the following table. Note that \\entityName{} was considered a division of \\issuer{} because it is wholly-owned by \\issuer{} and thus did not file a separate federal tax return.  The Company has elected to be taxed as a C-Corp rather than an LLC. \\\\

\\begin{tabular}{ | l | l | l | l | }
\\hline
Company    &Total Income &Taxable Income &Total Tax  \\\\
\\hline
\\issuer{} &\\issuerTotalIncomeMostRecentFiscalYear{} &\\issuerTaxableIncomeMostRecentFiscalYear{} &\\taxPaidMostRecentFiscalYear{}  \\\\
\\hline
\\end{tabular}

\\section{\\textbf{Regulatory Information}}
%\\addcontentsline{toc}{section}{Regulatory Information} \\\\

\\subsection{Disqualification}
%\\addcontentsline{toc}{section}{Disqualification} \\\\
\\formCDisqualifyingEvents{}

\\subsection{Compliance Failures}
%\\addcontentsline{toc}{section}{Compliance Failures} \\\\

There have been \\formCComplianceFailures{} compliance failures related to Reg CF from the \\issuer{}.

\\subsection{Annual Report}
%\\addcontentsline{toc}{section}{Annual Report} \\\\

The Company will file an annual report per Regulation Crowdfunding requirements on its website. The annual reports will be available within 120 days of the end of the issuers most recent fiscal year.  

\\subsection{Transactions}
%\\addcontentsline{toc}{section}{Transactions} \\\\

\\formCRelatedPartyTransactions{}

\\newpage
\\section*{APPENDIX A - Financial Statements}
\\begin{center}
    \\emph{\\textbf{[Balance Sheet, Profit and Loss, and cash Flows]}}
\\end{center}

\\newpage

\\section*{APPENDIX B - Raise Green Issuer Agreement}
\\begin{center}
    \\emph{\\textbf{[Insert Issuer Agreement]}}
\\end{center}
 \\newpage

 \\section*{APPENDIX C - Prior Offerings}
 \\begin{center}
    \\emph{\\textbf{[List any prior offerings]}}
\\end{center}
\\newpage

 \\section*{APPENDIX D - Third Party Providers}
 \\begin{center}
    \\emph{\\textbf{[List of selected enterprise partners]}}
\\end{center}
\\newpage

 \\section*{APPENDIX E - Raise Green (Funding Portal) Compensation}
Raise Green receives 5 percent compensation of a successful raise plus 5 percent compensation of the same class and type of securities offered.

\\newpage
\\section*{APPENDIX F - General Information about the Crowdfunding Process}

\\subsection*{Delivering Securities to Investors} 
The Company will work through Raise Green’s FINRA compliant regulated Funding Portal to conduct the Regulation Crowdfunding offer of securities. Securities will be delivered through electronic transmission.

\\subsection*{Remuneration for Raise Green}
Raise Green will get paid a flat 5\\% on the amount raised which it withdrawn directly from the escrow account before disbursing funds to the Company. Raise Green pays for credit card fees charged on investments, as well as for the Bad Actor Check disqualification review.

\\subsection*{Cancellation}
Investors may cancel an investment commitment for any reason until 48 hours prior to the end of the Offering Period, identified in these offering materials. For example, if the deadline is Dec 24th, you can cancel until Dec 22 at 11:59 EST. You cancel your commitment by sending an email from your email on file with Raise Green with explicit Cancellation instructions to info@raisegreen.com. Once, within the 48 hours, you can no longer cancel your investment commitment, even if your investment was submitted within the 48 hour time period. 

\\subsection*{Progress in an Offering}
The Raise Green investor marketplace will display an investment progress bar to update interested parties throughout the offering. 

\\subsection*{Early Close and Material Changes}
Raise Green, as the intermediary conducting the offering, will notify investors when the target offering has been met. If the issuer reaches the target offering amount prior to the deadline identified in the offering materials, it may close the offering early if it provides notice about the new offering deadline at least five business days prior to such new offering deadline (absent a material change that would require an extension of the offering and reconfirmation of the investment commitment).If an investor does not cancel an investment commitment before the 48-hour period prior to the offering deadline, the funds will be released to the issuer upon closing of the offering and the investor will receive securities in exchange for his or her investment. If an investor does not reconfirm his or her investment commitment after a material change is made to the offering within 5 business days, the investor’s investment commitment will be cancelled and the committed funds will be returned. \\\\

\\subsection*{Oversubscribed}
In the case an Offering is oversubscribed i.e., the investor interest is over the Maximum Offering amount, the Issuer will allocate securities based on a first come first served basis. That means the Company  is under no obligation to accept any additional subscriptions for the Notes once the Company has received subscriptions for the maximum amount of the offering.  Investors should take this into consideration when they consider the timing of placing their investment commitment. If the total amount of investor commitments does not meet or exceed the Minimum Target Offering Amount by the deadline for the Offering, the Offering is canceled, no securities will be sold, investors will receive a full refund, and the Issuer will not receive funds. 

\\subsection*{Investors}
To invest in an offering Investors must have an account with Raise Green. We will collect some personal information and run a Know-Your-Customer and Anti-Money Laundering check on each investor. An individual must be 18 years of age to invest. More information is available at FAQ. 

\\subsection*{Termination and Amendments/Modifications}
Prior to completion of the Offering, the Company has reserved the absolute right to terminate the Offering of any of the Notes offered hereby at any time without prior notice (up to forty-eight (48) hours prior to the end of the Offering period).  Prior to the completion of the Offering, the Company has also reserved the absolute right to modify the terms of the Offering, If there is a material change to the terms of an Offering or to the information provided in connection therewith,

\\begin{itemize} 
    \\item The investor will receive Notice of the material change and that the investor's investment will be cancelled unless the investor confirms his or her investment within five (5) business days of receipt of the notice.
    \\item If the investor fails to reconfirm his or her investment within those five (5) business days, then, within five (5) business days thereafter, The investor will receive a Notice disclosing that the investment was canceled, and the reason for the cancellation; and The Funding Portal will direct the investor funds to be refunded if they have been debited.
\\end{itemize}

\\subsection*{Restrictions on Transfer of the Securities Being Offered Within the First Year after the Purchase} 
The securities being offered generally may not be resold by any purchaser of such securities for a period of one year beginning when the securities were issued, unless such securities are transferred: 

\\begin{itemize}
    \\item to the issuer of the securities; 
    \\item to an “accredited investor”;
    \\item as part of an offering registered with the U.S. Securities and Exchange Commission; or 
    \\item to a member of the family of the purchaser or the equivalent, to a trust controlled by the purchaser, to a trust created for the benefit of a member of the family of the purchaser or the equivalent, or in connection with the death or divorce of the purchaser or other similar circumstance. 
\\end{itemize}

The term “accredited investor” means any person who comes within any of the categories set forth in Rule 501(a) of Regulation D, or who the seller reasonably believes comes within any of such categories, at the time of the sale of the securities to that person. The term “member of the family of the purchaser or the equivalent” includes a child, stepchild, grandchild, parent, stepparent, grandparent, spouse or spousal equivalent, sibling, mother-in-law, father-in-law, son-in-law, daughter-in-law, brother-in-law, or sister-in-law of the purchaser, and includes adoptive relationships. The term “spousal equivalent” means a cohabitant occupying a relationship generally equivalent to that of a spouse.

After the one year period, any agreement to transfer or sell the securities will be authorized only by the written confirmation of both the Offeree and the Company.  Without limiting the foregoing, the Company shall not recognize and shall issue stop-transfer instructions with respect to any such sale, pledge, or transfer, except upon the conditions specified in this Agreement, which conditions are intended to ensure compliance with applicable law. Before any proposed sale, pledge, or transfer of any Subscribed Note, unless there is in effect a registration statement under the Securities Act covering the proposed transaction, the holder thereof shall give notice to the Company of such holder’s intention to effect such sale, pledge, or transfer. Each such notice shall describe the manner and circumstances of the proposed sale, pledge, or transfer in sufficient detail and, if reasonably requested by the Company, shall be accompanied at such holder’s expense by either (i) a written opinion of legal counsel who shall, and whose legal opinion shall, be reasonably satisfactory to the Company, addressed to the Company, to the effect that the proposed transaction may be effected without registration under the Securities Act; (ii) a “no action” letter from the SEC to the effect that the proposed sale, pledge, or transfer of such Restricted Securities without registration will not result in a recommendation by the staff of the SEC that action be taken with respect thereto; or (iii) any other evidence reasonably satisfactory to counsel to the Company to the effect that the proposed sale, pledge, or transfer of the Subscribed Note may be effected without registration under the Securities Act, whereupon the holder of such Subscribed Note  shall be entitled to sell, pledge, or transfer such Subscribed Note in accordance with the terms of the notice given by the Holder to the Company.

\\end{document}
`