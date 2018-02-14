define([], function() {

var model = {
	logo:'the<span class="heavy">Board</span>list',
	topNav:[
		{url:'#',name:'recommend'},
		{url:'#',name:'discover'},
		{url:'#',name:'invest'}
	],
	candidateForm:{
		gfID:'https://docs.google.com/forms/d/e/1FAIpQLSeIGwgns6BjJYlAwD59WvrBJ_M9v5Uml51-1BgAVQA96P6SGQ/formResponse',
		title:'Candidate Application',
		basicTitle:'Your Basic Info',
		basicDetails:[
			{label:'First Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Last Name',type:'text',name:'',style:'col-sm-6'},
			{label:'LinkedIn Profile',type:'text',name:'',style:'col-sm-12'},
			{label:'Email Address',type:'text',name:'',style:'col-sm-12'},
			{label:'Password',type:'text',name:'',style:'col-sm-12',}
		],
		endorserTitle:{title:'Your Endorser',sub:'Ask someone who meets <span class="medium orange">the criteria for an Endorser Member</span> to join theBoardlist and nominate you.'},
		endorserDetails:[
			{label:'First Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Last Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Email Address',type:'text',name:'',style:'col-sm-12'}
		],
		boardTitle:{title:'Your Prior Board Experience',sub:'Candidates on theBoardlist meet at least one of the following criteria:'},
		boardDetails:[
			{label:'CEO or Founder of a company with $5m+ in revenue',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'CEO or C-level (VP+ reporting directly to the CEO) at a company with $25m+ in annual revenue',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'CEO, C-level, or Director at a company with $500m+ in annual revenue',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'On a Non-Profit board',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'On a Public board',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'On a Private board',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'On an Advisory board',type:'checkbox',name:'',style:'col-sm-12'}
		]
	},
	endorserForm:{
		gfID:'',
		title:'Endorser Member Application',
		basicTitle:'Your Basic Info',
		basicDetails:[
			{label:'First Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Last Name',type:'text',name:'',style:'col-sm-6'},
			{label:'LinkedIn Profile',type:'text',name:'',style:'col-sm-12'},
			{label:'Email Address',type:'text',name:'',style:'col-sm-12'},
			{label:'Password',type:'text',name:'',style:'col-sm-12'}
		],
		boardTitle:{title:'Your Board Experience',sub1:'To endorse a Candidate on theBoardlist, you must meet the following criteria:',sub2:'You must have board exerience on at least one:'},
		personalDetails:[
			{label:'As an Individual – CEO or C-level (VP+ reporting directly to CEO) of a company with at least one institutional round of funding (i.e. led by an institutional investor vs. angels)',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'As an Investor / VC - Seed, VC or private equity investors in the tech sector',type:'checkbox',name:'',style:'col-sm-12'}
		],
		boardDetails:[
			{label:'On a Non-Profit board',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'On a Public board',type:'checkbox',name:'',style:'col-sm-12'},
			{label:'On a Private board',type:'checkbox',name:'',style:'col-sm-12'}
		],
		candidateTitle:{title:'Endorse a Candidate',sub1:'Please provide an endorsement for the exceptional woman leaders you want to recommend for board opportunities',sub2:'Best suited for (2 max)'},
		candidateDetails:[
			{label:'First Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Last Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Email Address',type:'text',name:'',style:'col-sm-12'},
			{label:'Current Company',type:'text',name:'',style:'col-sm-12'}
		],
		candidateFor:[
			{label:'Early Stage (Series A/B)',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'Mid Stage (Series B/B+ - D)',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'Late Stage (Series E/F+)',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'On a Public board',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'On a Private board',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'On a Non-Profit board',type:'checkbox',name:'',style:'col-sm-6'}
		]
	},
	SearcherForm:{
		gfID:'',
		title:'Searching Application',
		basicTitle:'Your Basic Info',
		basicDetails:[
			{label:'First Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Last Name',type:'text',name:'',style:'col-sm-6'},
			{label:'LinkedIn Profile',type:'text',name:'',style:'col-sm-12'},
			{label:'Email Address',type:'text',name:'',style:'col-sm-12'},
			{label:'Password',type:'text',name:'',style:'col-sm-12'}
		],
		companyTitle:{title:'Open Board Postion Info',sub1:'Tell us about the board seat you\'re looking to fill'},
		companyName:{label:'Current Company',type:'text',name:'',style:'col-sm-12'},
		searchCriteria:[
			{label:'Annual Revenue',name:'',opt1:'under $5m Revenue',opt2:'$5m+ Revenue',opt3:'$25m+ Revenue'},
			{label:'Venture Funding',name:'',opt1:'not applicable',opt2:'under $5m',opt3:'over $5m'},
			{label:'Timeframe to fill seat',name:'',opt1:'1 month',opt2:'3 months',opt3:'6 months'},
		]
	},
	searcherEndorsmentForm:{
		gfID:'',
		candidateTitle:{title:'Endorse a Candidate',sub1:'Please provide an endorsement for the exceptional woman leaders you want to recommend for board opportunities',sub2:'Best suited for (2 max)'},
		candidateDetails:[
			{label:'First Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Last Name',type:'text',name:'',style:'col-sm-6'},
			{label:'Email Address',type:'text',name:'',style:'col-sm-12'},
			{label:'Current Company',type:'text',name:'',style:'col-sm-12'}
		],
		candidateFor:[
			{label:'Early Stage (Series A/B)',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'Mid Stage (Series B/B+ - D)',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'Late Stage (Series E/F+)',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'On a Public board',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'On a Private board',type:'checkbox',name:'',style:'col-sm-6'},
			{label:'On a Non-Profit board',type:'checkbox',name:'',style:'col-sm-6'}
		]
	}
};
return model;
});
