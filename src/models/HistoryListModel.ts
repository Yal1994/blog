import { BaseAction } from "./commonModel";
import InitParams from "@/common/InitParams";

/**
 * 含ModelType,Actions,Reducers
 */

export interface BlogHistory {
	_id: string;
	desc: string;
	createTime: string;
	title: string;
	pic: string;
}

export interface BlogHistoryPages {
	blogHistoryList: BlogHistory[];
	curPage: number;
	total: number;
	pageSize: number;
	loading: boolean;
}

const initBlogHistory: BlogHistory = {
	_id: '_1',
	createTime: '2020-06-25',
	title: '博客出生了',
	desc: '博客前台开始开发',
	pic: '/logo.png',
};

const initBlogHisPageState:BlogHistoryPages = {
	blogHistoryList:[initBlogHistory],
	curPage:InitParams.initCurPage,
	pageSize:InitParams.initPageSize,
	loading:false,
	total:1
}

interface BlogHistoryAction {
	name:string,
	state:any
}

interface BlogHistoryActionTypes {
	getBlogHistoryList:BlogHistoryAction
}

const getBlogHisListAct:BlogHistoryAction ={
	name:'getBlogHistoryList',
	state:initBlogHisPageState
}

const blogHistoryActions:BlogHistoryActionTypes = {
	getBlogHistoryList:getBlogHisListAct,
}


export const blogHistoryReducers = (payload:any,action:BaseAction)  => {
	switch (action.type) {
		case blogHistoryActions.getBlogHistoryList.name : {
			
			// TODO: get Historys from server and mapState
			
		}
	}
}
