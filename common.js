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


        /******************************** 
			 **** category 목록 생성 
			 ********************************/
			const category = new Set();

			// 카테고리 전체카테고리 세팅
			const resetCategory = () => {
				for (let i =0; i < data.length; i++) {
					category.add(data[i].type);
				}	
				// debugger;
			}
			// 카테고리 비우기
			const clearCategory = () => {
				category.clear();
			}

			
		
			/******************************** 
			 **** category 체크박스 생성
			********************************/
			const sortCategory = document.querySelector(".sort");
			//sortCategory.style.background = "red"
			const makeCategory = () => {
			 // 카테고리 체크박스 생성
				let obj = `<label for="all"><input type="checkbox" name="sort-category" id="all" checked value="all"/>All</label>`;
				Array.from(category).map((tag)=>{	
					obj += `<label for="${tag}"><input type="checkbox" name="sort-category" id="${tag}" checked value="${tag}"/>${tag}</label>`	
				})
				sortCategory.innerHTML = obj
			}
			
			/******************************** 
			 **** tbody에 데이터 출력
			********************************/
			const tbody = document.querySelector("#tbody");
			const createTrData = () => {		
				// 출력될 Data 가져옴.
				
				const sortedData = data.filter((value) => {
					return category.has(value.type);
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
				tbody.innerHTML = obj;
			}

			/******************************** 
			 **** checkbox 선택 시 tbody, checkbox 그룹 업데이트
			********************************/
			const setSiblingCheckboxChecked = (target, state) => {
				
				console.log( target, state)
				target.parentElement.querySelectorAll("input[type=checkbox]").forEach((chk) => {
					chk.checked = state;
				})
			}
			const setSortCategory = (e) => {	
				console.log("click");	
				if(e.target.value === "all") {		
					if(e.target.checked) {
						resetCategory();
						createTrData();
						setSiblingCheckboxChecked(e.target, true);
					} else {
						clearCategory();
						createTrData();
						setSiblingCheckboxChecked(e.target, false);
					}
				//	debugger;
				}

				if(e.target.checked) {
					// console.log(e.target.value + "선택");
					category.add(e.target.value)
				} else {
					// console.log(e.target.value + "해제")
					category.delete(e.target.value)
				}
				// console.log(category);
				createTrData();
			}

			
			window.addEventListener("load", function() {
				resetCategory();
				makeCategory();
				createTrData();

				const sortCategoryChks = document.querySelectorAll("#sortCategory [name='sort-category']");
				for(let i = 0; i < sortCategoryChks.length; i++) {
				//	console.log("debugger;")
					sortCategoryChks[i].addEventListener('click', setSortCategory);
				}	
			})


})();