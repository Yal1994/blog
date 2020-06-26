import * as React from 'react';
import DownResume from './download';
import myResume from './resume';
import { Divider } from 'antd';

interface IResumeContentProps {}

const ResumeContent: React.FunctionComponent<IResumeContentProps> = (props) => {
    //import from '../resume.example'
    const r = myResume;
	return (
		<>
			<div className="Cv">
				<main className="page">
					<section>
						<h1 className="f-s-18 f-w-900 m-b-20">联系方式</h1>
						<div className="boxes default m-b-20">
							<div className="box bg-gray-lightest p-t-0 p-b-0">
								<div className="row">
									<div className="col-4 p-t-10 p-b-10">● 手机：{r.phone}</div>
									<div className="col-4 p-t-10 p-b-10 border">
										● Email：{r.email}
									</div>
									<div className="col-4 p-t-10 p-b-10 border">
										● 网站：{r.site}
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h1 className="f-s-18 f-w-900 m-b-20">个人信息</h1>
						<div className="boxes default m-b-20">
							<div className="box bg-gray-lightest p-t-0 p-b-0">
								<div className="row">
									<div className="col-4 p-t-10 p-b-10">
										● {r.name} | {r.gender} | {r.born} | {r.city} | {r.status}
									</div>
									<div className="col-4 p-t-10 p-b-10 border">
										● {r.education} | {r.school} | {r.major}
									</div>
									<div className="col-4 p-t-10 p-b-10 border">
										● {r.position} | {r.yearOfWork} 年工作经验
									</div>
								</div>
                                <div className="row">
									<div className="col-4 p-t-10 p-b-10">
										● 期望职位：{r.expectPosition}
									</div>
								</div>
								<div className="row">
									<div className="col-4 p-t-10 p-b-10 border">
										● 期望城市：{r.expectCity}
									</div>
								</div>
							</div>
							<div className="box bg-gray-lightest">
								● Github：
								<a href={r.github} target="_blank">
									{r.github}
								</a>
							</div>
							<div className="box bg-gray-lightest">
								● Gitee：
								<a href={r.gitee} target="_blank">
									{r.gitee}
								</a>
							</div>
							<div className="box bg-gray-lightest">
								● 个人博客：
								<a href={'http://'+r.site} target="_blank">
									http://{r.site}
								</a>
							</div>
						</div>
					</section>
					<section>
						<h1 className="f-s-18 f-w-900 m-b-20">开源项目</h1>
						<div className="boxes default m-b-20">
							{r.osProjects.map((p) => {
								return (
									<div className="box bg-gray-lightest">
										●
										<a href={p.github} target="_blank">
											{p.name} - {p.desc}
										</a>
									</div>
								);
							})}
						</div>
					</section>
					<section>
						<h1 className="f-s-18 f-w-900 m-b-20">技能掌握</h1>
						<div className="boxes default m-b-20">
							{r.skills.map((v) => {
								return <div className="box bg-gray-lightest">● {v}</div>;
							})}
						</div>
					</section>
					<section>
						<h1 className="f-s-18 f-w-900 m-b-20">工作经历</h1>
						{r.experiences.reverse().map((e) => {
							return (
								<div className="boxes default m-b-20">
									<div className="box bg-gray-lightest">
										●{' '}
										<b>
											{e.company} （ {e.start} ~ {e.end} ）
										</b>
									</div>
									<div className="box bg-gray-lightest">
										<p className="m-t-0">
											- 岗位：
											<b>{e.position}</b>
										</p>

										<p>
											- 工作内容：
											<b>
												{e.duties.map((v, i) => {
													return (
														<span>
															{v}
															{i < e.duties.length - 1 ? '、' : ''}
														</span>
													);
												})}
											</b>
										</p>
										<p>
											- 涉及项目：
											<p></p>
											<div style={{ marginLeft: '5em' }}>
												{e.projects.map((pj) => {
													return (
														<>
															<p>
																● <b> {pj.desc}</b>
															</p>
															<p>* 简介： {pj.content}</p>
															<p>* 职务： {pj.duty}</p>
															<p>* 内容： {pj.point}</p>
															<Divider></Divider>
														</>
													);
												})}
											</div>
										</p>
									</div>
								</div>
							);
						})}
                        路还在继续...
					</section>
				</main>
				<DownResume />
			</div>
		</>
	);
};

export default ResumeContent;
