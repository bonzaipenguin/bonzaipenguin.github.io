define([], function() {

var model = {
	logo:'the<span class="heavy">Invest</span>list',
	topNav:[
		{url:'#',name:'recommend'},
		{url:'#',name:'discover'},
		{url:'#',name:'invest'}
	],
	avatar:'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/22770026_10155160631158940_3438367027275689011_o.jpg?oh=8e7d0bc23cd281c28e6a4658edb8db61&oe=5ADAC8F8',
	userList:[
		{url:'#',name:'profile'},
		{url:'#',name:'searches'},
		{url:'#',name:'settings'},
		{url:'#',name:'logout'}
	],
	introPanel:{
		splashImg:'style/img/til_splash.jpg',
		hook:'Join over 1,000 tech industry leaders to discover and invest in outstanding female entreprenuers',
		cta:'Discover',
		joinUs:'don\'t have an account?',
		joinLink:'join here'
	},
	techInfo:{
		title:'underinvestment in female founders',
		subtitle:'Significant gaps between seed, venture rounds and dollars to male-led v. female-led',
		coList:[
			{stat:'2.5 <span>x</span>', context:'A female investor is more likely to invest in female-led company'},
			{stat:'8 <span>%</span>', context:'Investing partners are women'}
		],
		graph:''
	},
	genInfo:{
		title:'female entrepreneurs in the u.s.',
		subtitle:'Women-owned businesses represent substantial part of US economy',
		coList:[
			{stat:'1.3 <span>million</span>', context:'Professional, Scientific, and Technical Services businesses are women-owned'},
			{stat:'$1.58 <span>trillion</span>', context:'Potential add to U.S. economy if women-owned businesses were funded like men-owned businesses'},
			{stat:'2 <span>x</span>', context:'Women more often start buisinesses vs. men'}
		]
	},
	investors:{
		community:['style/img/investor-1.png','style/img/investor-2.png','style/img/investor-3.png','style/img/investor-4.png','style/img/company-1.png','style/img/company-2.png','style/img/company-3.png','style/img/company-4.png'],
		title:'the best female-led startups',
		subtitle:'In a community driven platform for investors',
		copy:'theInvestlist is a platform for male and female tech leaders to recommend, discover and invest in outstanding female-led startups'
	},
	benefits:{
		title:'benefits for investors and startups',
		subtitle:'Scaling high quality sourcing and removing gatekeepers that keep women out',
		coList:[
			{stat:'Experienced Investors', context:'Scales up pipeline of female-led startups beyond existing small, informal networks Increases efficiency of prospecting process'},
			{stat:'Female Founders', context:'Increases direct exposure to potential investors by removing gatekeepers that keep women out of VC mix'},
			{stat:'Inexperienced Investors', context:'Trusted investor endorsements provide reassurance to spur more investment activity'}
		]
	},
};
return model;
});
