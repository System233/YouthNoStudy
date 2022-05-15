export interface YouthLearningURLReqData {
	mid: number | string;
	_: number | string;
}
export interface ChapterSaveHistoryReqData {
	chapterId: string;
}
export interface UserGetReqData {
	sign: string;
}
export interface ChapterNewEntityData {
	pageNo: number;
	pageSize: number;
	sortBy: string;
	orderBy: string;
	beginDate: null;
	endDate: null;
	id: string;
	createDate: string;
	updateDate: string;
	status: number;
	platform: string;
	name: string;
	code: number;
	sort: number;
	url: string;
	pid: string;
	isEnable: number;
	studyTime: number;
	between: boolean;
}
export interface ChapterNewData {
	total: number;
	pageNo: number;
	pageSize: number;
	entity: ChapterNewEntityData;
	list: [];
}
export interface ChapterSaveHistoryData {
	total: number;
	pageNo: number;
	pageSize: number;
	entity: {};
	list: [];
}
export interface UserGetEntityData {
	pageNo: number;
	pageSize: number;
	sortBy: string;
	orderBy: string;
	beginDate: null;
	endDate: null;
	id: string;
	createDate: string;
	updateDate: string;
	status: number;
	platform: string;
	expand: string;
	mobile: null;
	phone: string;
	photo: null;
	nickName: string;
	remarks: null;
	birthday: null;
	sex: number;
	userType: number;
	userName: string;
	type: null;
	name: null;
	accountStatus: number;
	avatarUrl: string;
	trueName: null;
	email: null;
	idCard: null;
	area: null;
	personalLabel: null;
	paymentTerm: null;
	cashAccount: null;
	memberLevel: number;
	level: null;
	levelNumber: null;
	numberOfShop: number;
	money: number;
	shopId: null;
	jobNumber: null;
	organizeId: null;
	building: null;
	room: null;
	payment: number;
	commission: number;
	unionId: string;
	age: number;
	qrcode: null;
	lastLoginDevice: string;
	beginLoginDate: null;
	endLoginDate: string;
	faceId: string;
	operationId: null;
	partyStatus: boolean;
	openId: null;
	appOpenId: string;
	pubOpenId: string;
	isBindEnterprisEmail: number;
	gender: null;
	openMemberNumber: number;
	sort: null;
	weChat: string;
	qq: string;
	score: number;
	boxCount: number;
	userIdentity: number;
	token: string;
	integral: number;
	zanNum: number;
	postNum: number;
	organizeIds: null;
	commentNum: number;
	focusNum: number;
	fansNum: number;
	forwardNum: number;
	roles: [];
	permissions: [];
	rolesName: null;
	canFocus: boolean;
	isOtherFocus: boolean;
	isPayPassword: null;
	isOpenCredit: null;
	credit: null;
	yunxinToken: null;
	weight: null;
	height: null;
	industry: null;
	range: null;
	auth: null;
	annexId: null;
	isNew: boolean;
	froutTime: null;
	isFouce: boolean;
	referrInfo: null;
	opeAwardMoney: number;
	typeText: string;
	anchorStatus: null;
	anchorAddress: null;
	anchorVideo: null;
	anchorTime: null;
	anchorPrice: null;
	videoAddress: null;
	focusStatus: null;
	goodList: null;
	izyFirstOrgId: null;
	izySecondOrgId: null;
	izyOrgType: null;
	izyFirstOrgName: null;
	izySecondOrgName: null;
	scoreTotal: null;
	tuanjianUserInfo: null;
	memberBeginDate: null;
	memberEndDate: null;
	between: boolean;
}
export interface UserGetData {
	total: number;
	pageNo: number;
	pageSize: number;
	entity: UserGetEntityData;
	list: [];
}
export interface YouthLearningURLData {
	youthLearningUrl: string;
	status: number;
}
export interface API {
	ChapterNew: [null,ChapterNewData];
	YouthLearningURL: [YouthLearningURLReqData,YouthLearningURLData];
	ChapterSaveHistory: [ChapterSaveHistoryReqData,ChapterSaveHistoryData];
	UserGet: [UserGetReqData,UserGetData];
}
export interface Response<T> {
    detailMessage: string;
    debugMessage: string;
    msg: string;
    errmsg: string;
    errno: number;
    data: T;
}
export interface IAPI{
    method:'GET'|'POST';
    url:string;
    headers:Record<string,string>;
    params:Record<string,any>|null;
}
export type IAPIMap=Record<string,IAPI>;
export const APIMap:IAPIMap={
  ChapterNew: {
    method: 'GET',
    url: 'https://youthstudy.12355.net/saomah5/api/young/chapter/new',
    headers: {
      Host: 'youthstudy.12355.net',
      Accept: '*/*',
      'Content-Type': 'application/json',
      'X-Litemall-IdentiFication': 'young',
      Referer: 'https://youthstudy.12355.net/h5/'
    },
    params: {}
  },
  YouthLearningURL: {
    method: 'GET',
    url: 'https://tuanapi.12355.net/questionnaire/getYouthLearningUrl',
    headers: {
      Host: 'tuanapi.12355.net',
      Accept: 'application/json, text/javascript, */*; q=0.01',
      Origin: 'https://tuan.12355.net',
      Referer: 'https://tuan.12355.net/wechat/index.html'
    },
    params: {}
  },
  ChapterSaveHistory: {
    method: 'POST',
    url: 'https://youthstudy.12355.net/saomah5/api/young/course/chapter/saveHistory',
    headers: {
      Host: 'youthstudy.12355.net',
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Origin: 'https://youthstudy.12355.net',
      'X-Litemall-IdentiFication': 'young',
      Referer: 'https://youthstudy.12355.net/h5/'
    },
    params: {}
  },
  UserGet: {
    method: 'POST',
    url: 'https://youthstudy.12355.net/saomah5/api/user/get',
    headers: {
      Host: 'youthstudy.12355.net',
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Origin: 'https://youthstudy.12355.net',
      'X-Litemall-IdentiFication': 'young',
      Referer: 'https://youthstudy.12355.net/h5/'
    },
    params: {}
  }
}
