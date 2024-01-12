import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Header = () => {

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const fetchSuggestion = async () => {
      try {

        const response = await fetch(`https://admin-api.lalpathlabs.com/api/test/elastic/search?search_string=${inputValue}&result_size=2&user_session_uid=undefined&city_name=delhi`, {
          headers: {
            'x-access-token': `60f291aa46ea447060f291aa46ea447019d83ba30be508e419d83ba30be508e4`
          }
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch suggestions. Status: ${response.status}`);
        }

        const data = await response.json();


        if (Array.isArray(data.Data.result)) {
          const filteredSuggestions = data.Data.result
            .map(item => (item.suggestions || [])
              .filter(suggestion =>
                typeof suggestion === 'string' && suggestion.label.toLowerCase().includes(inputValue.toLowerCase())
              )
            )
            .flat();
          console.log(filteredSuggestions);
          setSuggestions(filteredSuggestions);

        }
        else {
          console.error('Invalid data structure. Expected "result" to be an array.');
        }

        console.log(data.Data.result);
        setSuggestions(data.Data.result);
      }
      catch (error) {
        console.log(error + ' fetching suggestion failed');
      }
    };

    if (inputValue !== '') {
      fetchSuggestion();
    }
    else {
      setSuggestions([]);
    }
  }, [inputValue]);


  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputBlur = () => {
    setSuggestions([]);
  };

  const handleInputFocus = () => {
    setIsInputFocused(false);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  }


  return (
    <>
      <div id="main_layout">

        <header>
          <div class="top-header-strip hide-on-mbl bg-[#fecc4e] py-2.5 w-full hidden md:block">
            <div class="">
              <div class="">

                <div class="flex md:justify-evenly">
                  <a href="javascript:void(0)" id="indexOfelement_0" class="active text-xs md:text-base"> PATIENTS </a>
                  <a href="javascript:void(0)" id="indexOfelement_1" class="text-xs md:text-base"> DOCTORS </a>
                  <a href="javascript:void(0)" id="indexOfelement_2" class="text-xs md:text-base"> BUSINESS PARTNERSHIP </a>
                  <a href="javascript:void(0)" id="indexOfelement_3" class="text-xs md:text-base"> ABOUT US </a>
                  <Link href="/Investor/InvestorInside" id="indexOfelement_4" class="text-xs md:text-base"> INVESTORS </Link>
                  <a href="javascript:void(0)" id="indexOfelement_5" class="text-xs md:text-base"> CONTACT US </a>
                </div>

              </div>
            </div>
          </div>
        </header>

      </div>

      <header className='bg-[#f5f5f5] z-10'>

        <div className='w-full'>
          <div className='row'>

            <nav class=" border-gray-200">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href='/Book/Book' class="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src="https://uat-cdn.drlallab.com/2023-06/logo-header-2.webp" alt="Dr Lal PathLabs" />

                </Link>
                <div class="flex md:order-2">
                  <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                  <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                      <span class="sr-only">Search icon</span>
                    </div>

                    <div className='ng-autocomplete'>
                      <div className='autocomplete-container active'>
                        <div className='input-container'>
                          <input value={inputValue} onChange={handleChange} onFocus={handleInputFocus} onBlur={handleInputBlur} className='p-2 focus:outline-none' type='text' placeholder='Start Typing' />
                        </div>
                        <div class="suggestions-container is-visible">
                          <ul>

                            {
                              suggestions.map((suggestion) => (
                                <li class="item ng-star-inserted" onClick={() => handleSelectSuggestion(suggestion)}>

                                  <div class="ng-star-inserted">

                                    <div class="ng-star-inserted">
                                      <a>
                                        <span>{suggestion.label}</span>
                                      </a>
                                    </div>

                                  </div>
                                </li>
                              ))
                            }


                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <ul>
                      {suggestions.map((suggestion) => (
                        <li key={suggestion.unique_id} onClick={() => handleSelectSuggestion(suggestion)}>
                          {suggestion.label}
                        </li>
                      ))}
                    </ul> */}

                  </div>

                  <div className='w-[30px] h-[20px] mt-[-18px] md:block hidden'>
                    <a href="/home/cart" class="shooping-bag relative left-4 w-[30px] ml-[30px] m-0 p-0">
                      <img src="https://uat-cdn.drlallab.com/2022-12/cart-plus.png" alt="Cart Plus Icon" className='' />

                    </a>
                  </div>
                  <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                  <div class="relative mt-3 md:hidden">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                  </div>
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                    <li>

                      <Link href="/Special/Special" class="block py-2 px-3 bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black md:hover:text-blue-700">Book A Test</Link>

                    </li>
                    <li>
                      <Link href='/Nearest/Nearest' class="block py-2 px-3 text-gray-900 rounded t md:hover:text-blue-700 md:p-0  dark:border-gray-700">Nearest Center</Link>
                    </li>
                    <li>
                      <Link href="/Pack/Pack" class="block py-2 px-3 text-gray-900 rounded t md:hover:text-blue-700 md:p-0  dark:border-gray-700">Download Report</Link>
                    </li>
                    <li>
                      <a href='#' class="block py-2 px-3 text-gray-900 rounded t md:hover:text-blue-700 md:p-0  dark:border-gray-700">Special Program</a>
                    </li>
                    <li>
                      <a href="#" class="block py-2 px-3 text-gray-900 rounded t md:hover:text-blue-700 md:p-0  dark:border-gray-700">Promotion Discount</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

      </header>


      {/* <header>
                <Link href='/Book/Book' className="logo-container">
                    <img src="https://media.lalpathlabs.com/images/lead-page/LOGO.png" alt="logo" className="logo_image" />
                </Link>
            </header> */}
    </>
  )
}

export default Header