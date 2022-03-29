(() => {

        /************************************************************
         * 탭
         ************************************************************/
        if ($('.tab_list')) {
            $('.tab_btns a').on('click', function (e) {
                e.preventDefault();
                var clickMenu = $(this).attr('href');
                $(this).addClass('active');
                $(this).parent().siblings('li').find("a.active").removeClass('active');
                // $('.tab_btns a').not($(this)).removeClass('on');

                $(clickMenu).addClass('on');
                $(clickMenu).siblings('.tab_box.on').removeClass('on');
                // $('.tab_box').not($(clickMenu)).removeClass('on');
            })
        }

        $(".depth1_title").bind("click", function () {
            $(this).toggleClass("showing");
        });

		const tab1Data = [
			{
				type: 'App',
				fileName: '크롬앱만들기 Todo List',
				summary: `
					1. 현재시간 표시<br />
					2. 이름을 입력하면, 인사말을 출력하고, 이름을 localStorage 에 저장<br />
					3. toDoList 작성/삭제, localStorage 에 저장.<br />
					4. 위치정보 가져오기, 날씨 API 사용
				`,
				tag: ["Date", "localStorage", "location"],
				linkBlank: 'samples/js_chrome_app_lacalStorage.html',
			},
			{
				type: 'App',
				fileName: '아날로그 시계',
				summary: `
				1. 시, 분, 초 침이 돌아 가는 아날로그 시계<br />
				2. @keyframes 애니메이션과 bg 사선 그라디언트 적용됨
				`,
				tag: ["@keyframes", "gradient"],
				linkBlank: 'samples/js_clock_1.html',
			},
			{
				type: 'Canvas',
				fileName: '그림판만들기',
				summary: "그림판 Canvas, Touch 이벤트에도 작동",
				tag: ["Canvas"],
				linkBlank: 'samples/js_paintBoard.html',
			},
			{
				type: '컨셉',
				fileName: 'Random_color',
				summary: "이미지 클릭시 배경이미지가 랜덤으로 바뀐다.",
				tag: ["Math.random", "mix-blend-mode"],
				linkBlank: 'samples/Random_color.html',
			},	
			
			{
				type: 'Button',
				fileName: '버튼 애니메이션',
				summary: "클릭하면 버튼 내부에 원이 퍼져나가는 애니메이션",
				tag: ["javascript", "css"],
				linkBlank: 'samples/svg_ButtonAnimation_1.html',
			},
			{
				type: 'Button',
				fileName: '버튼 애니메이션',
				summary: "svg를 이용한 버튼 애니메이션",
				tag: ["svg"],
				linkBlank: 'samples/svg_ButtonAnimation_2.html',
			},
			{
				type: 'Button',
				fileName: '햄버거메뉴',
				summary: "햄버거 메뉴 css 애니메이션",
				tag: ["css"],
				linkBlank: 'samples/Navigation_hamberger.html',
			},
			{
				type: 'Modal',
				fileName: '모달 1',
				summary: "toggle Class를 이용한 모달 show/hide",
				tag: ["javascript"],
				linkBlank: 'samples/modal_1.html',
			},
			{
				type: 'Menu',
				fileName: '네비 - 애니메이션 1',
				summary: "마우스 오버 시 메뉴 하이라이트, 클릭시 active 클래스 추가",
				tag: ["css", "javascript"],
				linkBlank: 'samples/Glassmorphism_nav_magic_indicator.html',
			},
			{
				type: 'Menu',
				fileName: '네비 - 애니메이션 2',
				summary: "마우스 클릭 시 메뉴 하단 '바'가 따라오는 애니메이션",
				tag: ["css", "javascript"],
				linkBlank: 'samples/Glassmorphism_nav_magic_indicator_2.html',
			},	
			{
				type: 'Menu',
				fileName: '네비 - 애니메이션 3',
				summary: "마우스 오버시 메뉴 bg 애니메이션<br/>css content: attr(속성)을 사용",
				tag: ["css"],
				linkBlank: 'samples/Navigation_HoverAnimation.html',
			},	
			{
				type: 'Menu',
				fileName: '네비 - 애니메이션 4',
				summary: "메뉴 hover 시 body bg 컬러 변경",
				tag: ["javascript"],
				linkBlank: 'samples/Navigation_HoverAnimation_Indicator.html',
			},
			
			{
				type: 'Menu',
				fileName: '헤더영역 - 애니메이션',
				summary: "스크롤을 아래로 내리면 헤더가 사라지고, 위로 올리면 헤더가 나타남",
				tag: ["javascript"],
				linkBlank: 'samples/Scroll_NaviAnimation.html',
			},	
			{
				type: 'Menu',
				fileName: '헤더영역 - Sticky',
				summary: "스크롤을 하면 헤더의 일부 영역이 Sticky<br />yOffset과 fixed를 이용",
				tag: ["javascript"],
				linkBlank: 'samples/Scroll_NaviSticky.html',
			},
			{
				type: 'Menu',
				fileName: 'SideMenu - 반응형',
				summary: "사이드 메뉴영역 확대 축소 및 반응형 처리. fontawesome 사용",
				tag: ["fontawesome"],
				linkBlank: 'samples/SidebarMenu_with_fontawesome.html',
			},	
			{
				type: 'Menu',
				fileName: 'SideMenu - 토글',
				summary: "버튼을 눌러 사이드 메뉴 영역 show/hide",
				tag: ["javascript"],
				linkBlank: 'samples/Slider_Closing_Outside.html',
			},	
			{
				type: 'Chart',
				fileName: 'Progress - 원형 프로그래스',
				summary: "svg를 이용한 프로그래스",
				tag: ["svg"],
				linkBlank: 'samples/Progress_circle.html',
			},	
			{
				type: 'Chart',
				fileName: 'Progress - 커스텀 스크롤바 (세로형)',
				summary: "스크롤된 %에 맞춰 커스텀 Progress Scroll bar가 생성된다.",
				tag: ["scroll", "progress"],
				linkBlank: 'samples/Scrollbar_Customize_1.html',
			},
			{
				type: 'Chart',
				fileName: 'Progress - 커스텀 스크롤바 (가로형)',
				summary: "스크롤된 %에 맞춰 커스텀 Progress bar가 생성된다.",
				tag: ["scroll", "progress"],
				linkBlank: 'samples/Scrollbar_indicator.html',
			},
			{
				type: 'Chart',
				fileName: '막대그래프',
				summary: "only html, css",
				tag: ["css"],
				linkBlank: 'samples/Chart_virtialGraph.html',
			},
			
			{
				type: 'Calendar',
				fileName: '캘린더 1',
				summary: "only html, css로 구현된 캘린더. 기능 X",
				tag: ["css"],
				linkBlank: 'samples/CalendarUI_With_Grid.html',
			},
			{
				type: 'Calendar',
				fileName: '캘린더 2',
				summary: "[플러그인 - dycalendar] 을 이용한 캘린더",
				tag: ["plugin", "dycalendar"],
				linkBlank: 'samples/Glassmorphism_calendar.html',
			},
			
			
			
		
		
			{
				type: 'Parallax',
				fileName: 'Parallax 1',
				summary: "background image Parallax",
				tag: ["mousemove", "clientX, clientY"],
				linkBlank: 'samples/Parallax_1.html',
			},
			{
				type: 'Parallax',
				fileName: 'Parallax 2',
				summary: "css 변수를 이용한 background image, text Parallax",
				tag: ["css 변수", "--i, var(--i)"],
				linkBlank: 'samples/Parallax_2.html',
			},
					
			{
				type: 'Card Layout',
				fileName: 'Swiper',
				summary: "Swiper에 Depth 원근감 적용",
				tag: ["Swiper"],
				linkBlank: 'samples/Swiper_DepthOfCard.html',
			},
			{
				type: 'Card Layout',
				fileName: 'ClipPath 애니메이션',
				summary: "마우스 오버시 ClipPath 로 사각형 레이아웃 전환.<br/>사진에 마우스 오버시 Path 영역 애니메이션 되며 설명글로 전환",
				tag: ["clip-path"],
				linkBlank: 'samples/ClipPath_hoverEffect.html',
			},
			{
				type: 'Card Layout',
				fileName: '카드 레이아웃 1',
				summary: "마우스 오버 시 컨텐츠가 올라오는 애니메이션",
				tag: ["css"],
				linkBlank: 'samples/Glassmorphism_tilt.html',
			},
			{
				type: 'Card Layout',
				fileName: '카드 레이아웃 2',
				summary: "마우스 오버시 사각형 모양이 변경되는 레이아웃",
				tag: ["CSS Animation", "Card Layout"],
				linkBlank: 'samples/Glassmorphism_hover_tranform.html',
			},
			{
				type: 'Card Layout',
				fileName: '카드 레이아웃 3',
				summary: "마우스 오버시 위로 이동했다 내려오며 앞으로 튀어나오는 카드 z-index",
				tag: ["css"],
				linkBlank: 'samples/Glassmorphism_2.html',
			},
			{
				type: 'Card Layout',
				fileName: '카드 레이아웃 4',
				summary: "위아래로 오르락 내리락 하는 사각형들<br/>css 변수를 이용하여 시차를 두고 애니메이션 됨.",
				tag: ["css 변수", "--i, var(--i)"],
				linkBlank: 'samples/Glassmorphism_1.html',
			},
			{
				type: 'Card Layout',
				fileName: '3D Ainmation - 카드 뒤집기',
				summary: "마우스 오버시 뒤집어 지는 카드",
				tag: ["perspective", "backface-visibility", "rotateY", "preserve-3d", "Card Layout"],
				linkBlank: 'samples/Glassmorphism_3DTransform_Card.html',
			},
			{
				type: 'Scroll Paging',
				fileName: '스크롤 페이징',
				summary: "[플러그인 - skrollr]상하 스크롤 시 페이지 섹션이 좌우로 이동.",
				tag: ["plugin", "skrollr"],
				linkBlank: 'samples/Scroll_Animation_4.html',
			},
			{
				type: 'Scroll Paging',
				fileName: 'Scroll To',
				summary: "메뉴 클릭시 해당 섹션으로 부드럽게 이동",
				tag: ["scroll-behavior"],
				linkBlank: 'samples/ScrollTo_Navigation.html',
			},
			{
				type: 'odometer',
				fileName: 'odometer',
				summary: "[플러그인 - odometer]",
				tag: ["plugin", "odometer"],
				linkBlank: 'samples/NumberCounter_odometer.html',
			},	
			{
				type: 'Mousemove Ani',
				fileName: 'createElement',
				summary: "mousemove 시 createElement를 이용하여 위로 올라가는 엘리먼트 생성",
				tag: ["mousemove event", "createElement"],
				linkBlank: 'samples/MouseMove_createElements.html',
			},
			{
				type: 'Mousemove Ani',
				fileName: 'Follow eyes',
				summary: "마우스 커서를 쫒아다니는 눈",
				tag: ["Math.atan2", "transform rotate"],
				linkBlank: 'samples/MouseMove_FollowEyes.html',
			},
			{
				type: 'Mousemove Ani',
				fileName: 'ClipPath_1',
				summary: "ClipPath 작은 원 영역으로 뒷배경(고양이) 그림 보기, <br />마우스 클릭 시 영역 확대",
				tag: ["css clip-path", "css 변수", "--i, var(--i)"],
				linkBlank: 'samples/ClipPath_1.html',
			},
			{
				type: 'Mousemove Ani',
				fileName: 'Glass morphism',
				summary: "마우스 커서를 중심으로 backdrop-filter(blur) 적용",
				tag: ["backdrop-filter"],
				linkBlank: 'samples/Glassmorphism_mousemove_1.html',
			},
			
			{
				type: 'Mousemove Ani',
				fileName: 'Slide Split - Split 1',
				summary: "mouse 위치에 따라 Split 텍스트 반전(Black & White)",
				tag: ["css", "mix-blend-mode"],
				linkBlank: 'samples/Slider_mousemove_text.html',
			},	
			{
				type: 'Mousemove Ani',
				fileName: 'Slide Split - Split 2',
				summary: "mouse 위치에 따라 Split 이미지 변경",
				tag: ["javascript"],
				linkBlank: 'samples/Slider_split.html',
			},	
			
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 1',
				summary: "1분코딩 스크롤 애니메이션 예제<br/>IntersectionObserver을 이용한 애니메이션 처리",
				tag: ["IntersectionObserver"],
				linkBlank: 'samples/Scroll_Animation_1.html',
			},	
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 2',
				summary: "스크롤되면 동그라미(clip-path)가 커지면서 background 이미지가 확대",
				tag: ["clip-path"],
				linkBlank: 'samples/Scroll_Animation_2.html',
			},	
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 3',
				summary: "스크롤되면 하트(svg)가 커지면서 background 이미지가 확대",
				tag: ["svg"],
				linkBlank: 'samples/Scroll_Animation_2_SVG.html',
			},
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 4',
				summary: "스크롤되면 이미지 fadeout",
				tag: ["css opacity"],
				linkBlank: 'samples/Scroll_Animation_2_opacity.html',
			},	
			
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 5',
				summary: "스크롤되면 하단 빗금 각도가 평평해짐",
				tag: ["transform skew"],
				linkBlank: 'samples/Scroll_Animation_3.html',
			},	
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 6',
				summary: "스크롤되면 곡선으로 된 라인이 평평해짐",
				tag: ["transform scale"],
				linkBlank: 'samples/Scroll_Animation_4.html',
			},	
			{
				type: 'Scroll Ani',
				fileName: '스크롤 애니메이션 7',
				summary: "[플러그인 - jarallax] 스크롤 애니메이션과 패럴랙스",
				tag: ["plugin", "jarallax"],
				linkBlank: 'samples/Scroll_parallax.html',
			},	
			{
				type: 'SVG Animation',
				fileName: '꿈틀거리는 라인',
				summary: "SVG Path를 이용하여 css에서 꿈틀거리는 라인을 구현",
				tag: ["svg", "css"],
				linkBlank: 'samples/SVG_ElasticLineAnimation.html',
			},	
			{
				type: 'SVG Animation',
				fileName: '불타는 링',
				summary: "svg filter의 animate를 이용",
				tag: ["svg", "filter", "feTurbulence"],
				linkBlank: 'samples/SVG_Filter_Fire_1.html',
			},	
			
			{
				type: 'SVG Animation',
				fileName: 'Water Wave Div',
				summary: "svg filter의 animate를 이용. wave 가 적용된 박스",
				tag: ["svg", "filter", "feTurbulence"],
				linkBlank: 'samples/SVG_Filter_WavyDiv.html',
			},	
				
			{
				type: 'SVG Animation',
				fileName: 'Gooey 1',
				summary: "합쳐지고 흩어지는 동그라미",
				tag: ["svg", "filter"],
				linkBlank: 'samples/SVG_Filter_Gooey.html',
			},	
			{
				type: 'SVG Animation',
				fileName: 'Gooey 2',
				summary: "드래그 하여 합쳐지고 흩어지는 동그라미",
				tag: ["svg", "filter"],
				linkBlank: 'samples/SVG_Filter_GooeyMove.html',
			},	
		
			
			{
				type: 'SVG Animation',
				fileName: 'Icon Stroke Animation',
				summary: "아이콘의 라인을 따라 애니메이션",
				tag: ["svg", "stroke-dasharray", "stroke-dashoffset"],
				linkBlank: 'samples/SVG_StrokeAnimation_2.html',
			},	
			{
				type: 'SVG Animation',
				fileName: 'Loading - 로딩 1',
				summary: "물방울이 돌아가며 합쳐지는 로딩 애니메이션",
				tag: ["svg", "filter", "Gooey"],
				linkBlank: 'samples/SVG_Loding_Gooey.html',
			},	
			{
				type: 'SVG Animation',
				fileName: 'Loading - 로딩 2',
				summary: "시차를 두고 돌아가는 동그라미 로딩 바",
				tag: ["svg", "css"],
				linkBlank: 'samples/SVG_Loding_2.html',
			},	
			{
				type: 'SVG Animation',
				fileName: '물결 애니메이션 1',
				summary: "[플러그인 - gsap, wavify] Wave Animation ",
				tag: ["plugin", "gsap", "wavify", "Greensock"],
				linkBlank: 'samples/Greensock_tweenmax_waves.html',
			},	
			{
				type: 'SVG Animation',
				fileName: '물결 애니메이션 2',
				summary: "svg의 path를 css에서 컨트롤 하여 구현",
				tag: ["svg"],
				linkBlank: 'samples/SVG_Wave.html',
			},
			{
				type: 'SVG Animation',
				fileName: '물결 애니메이션 3',
				summary: "svg code를 background image로 적용",
				tag: ["svg"],
				linkBlank: 'samples/SVG_Wave_Water.html',
			},	
			{
				type: 'SVG Animation',
				fileName: 'ReactMon',
				summary: "Svg ReactMon, requestAnimationFrame를 이용한 부드러운 감속",
				tag: ["svg", "@keyframes", "requestAnimationFrame"],
				linkBlank: 'samples/svg_reactMoon.html',
			},
			{
				type: 'Typography',
				fileName: 'Text bg - 물결이 차오름.',
				summary: "Text bg 이미지를 이용한 CSS 물결 애니메이션<br />css의 -webkit-background-clip 속성을 이용하여 bg 마스크",
				tag: ["css", "-webkit-background-clip"],
				linkBlank: 'samples/CSS_Wave.html',
			},
			{
				type: 'Typography',
				fileName: '[SVG] Text Stroke Animation',
				summary: "텍스트의 주변을 따라 라인이 움직임",
				tag: ["svg", "stroke-dasharray", "stroke-dashoffset"],
				linkBlank: 'samples/SVG_StrokeAnimation_1.html',
			},	
			{
				type: 'Typography',
				fileName: '[SVG] Wavy Text',
				summary: "svg filter를 이용해 Wave가 적용된 텍스트",
				tag: ["svg", "filter", "feTurbulence"],
				linkBlank: 'samples/SVG_Filter_WavyText.html',
			},
			{
				type: 'Typography',
				fileName: '[SVG] 불타는 글자',
				summary: "svg filter의 animate를 이용",
				tag: ["svg", "filter", "feTurbulence"],
				linkBlank: 'samples/SVG_Filter_Fire_2.html',
			},	
			{
				type: 'Typography',
				fileName: '마우스 오버시 연기처럼 흩어지는 텍스트',
				summary: "마우스 오버시 연기처럼 흩어지는 텍스트",
				tag: ["javascript"],
				linkBlank: 'samples/typography_ani_1.html',
			},	
		];

		const tab2Data = [
			{
				type: '폼요소',
				fileName: 'input range Styling',
				summary: 'input type="range" CSS 커스텀',
				tag: ["css"],
				linkBlank: 'samples/Slider_Custom.html',
			},	
			{
				type: 'Object',
				fileName: 'css로 만드는 Object Styling',
				summary: 'css로 만드는 Object Styling',
				tag: ["css", "css 변수", "--i, var(--i)"],
				linkBlank: 'samples/CSS_Object.html',
			},
		]


        /******************************** 
			 **** class SetTable 정의
		 ********************************/
		class SetTable {
			constructor(container, data) {
				this.container = container;
				this.data = data;
				this.category = new Set();

				this.sortCategory = this.container.querySelector(".sort");
				this.tbody = this.container.querySelector("tbody");
			}	
			// 카테고리 전체카테고리 세팅
			resetCategory = () => {
				for (let i =0; i < this.data.length; i++) {
					this.category.add(this.data[i].type);
				}	
				// debugger;
			}
			// 카테고리 비우기
			clearCategory = () => {
				this.category.clear();
			}

			
			//sortCategory.style.background = "red"
			makeCategory = () => {
			 // 카테고리 체크박스 생성
				let obj = `<label for="all"><input type="checkbox" name="sort-category" id="all" checked value="all"/>All</label>`;
				Array.from(this.category).map((tag)=>{	
					obj += `<label for="${tag}"><input type="checkbox" name="sort-category" id="${tag}" checked value="${tag}"/>${tag}</label>`	
				})
				this.sortCategory.innerHTML = obj
			}
			/******************************** 
			 **** tbody에 데이터 출력
			********************************/
			
			createTrData = () => {		
				// 출력될 Data 가져옴.
				
				const sortedData = this.data.filter((value) => {
					return this.category.has(value.type);
				})

				let obj ="";	
					sortedData.map((item)=>{		
					obj += `
						<tr>
							<th scope="row">${item.type}</th>
							<td class="al">${item.fileName}</td>
							<td class="al">${item.summary}</td>
							<td class="al">${				
								item.tag.map((tag)=>{
									return `<span class="tag">${tag}</span>`	
								}).join('')
							}</td>
							<td><a href="${item.linkBlank}" target="_blank">새창</a></td>
						</tr>
					`;
				})
				// console.log("obj", obj)	
				this.tbody.innerHTML = obj;
			}

			/******************************** 
			 **** checkbox 선택 시 tbody, checkbox 그룹 업데이트
			********************************/
			setSiblingCheckboxChecked = (target, state) => {			
				console.log("state",this.container.querySelectorAll(".sort input[type=checkbox]"))	;	
				//debugger;
				this.container.querySelectorAll(".sort input[type=checkbox]:not([value=all])").forEach((chk) => {	
					console.log("chk", chk)	;		
				//	if(chk.id === "all") continue;	
					chk.checked = state;
				})
			}
			setSortCategory = (e) => {	
			//	
				if(e.target.value === "all") {
					
					if(e.target.checked) {
						this.resetCategory();
						this.createTrData();
						this.setSiblingCheckboxChecked(e.target, true);
					} else {
					
						this.clearCategory();
						this.createTrData();
						this.setSiblingCheckboxChecked(e.target, false);
					}
				  return;
				}
				// 클릭한게 all이 아닐경우	기존 all 이 checked되어 있다면 이를 해제
				const all = document.querySelector("#all");		
				if(all.checked) {
					console.log("all.checked",all.checked)
					all.checked = false;	
				//	clearCategory();
				}
							
				// 클릭한 체크박스에 해당하는 내용을 업데이트
				if(e.target.checked) {
					this.category.add(e.target.value);
				
				} else {
					this.category.delete(e.target.value)
				}
				this.createTrData();
			}
			
			addEvent = () => {
				const sortCategoryChks = container.querySelectorAll(".sort [name='sort-category']");
				for(let i = 0; i < sortCategoryChks.length; i++) {
				//	console.log("debugger;")
				sortCategoryChks[i].addEventListener('click', this.setSortCategory);
				}
			}
		}

		// 클래스 호출
		const table1 = new SetTable(document.querySelector("#tbl1"), tab1Data);
		const table2 = new SetTable(document.querySelector("#tbl2"), tab2Data);

			
		window.addEventListener("load", function() {
			table1.resetCategory();
			table1.makeCategory();
			table1.createTrData();
			table1.addEvent();
			table2.resetCategory();
			table2.makeCategory();
			table2.createTrData();
			table2.addEvent();

		})
})();