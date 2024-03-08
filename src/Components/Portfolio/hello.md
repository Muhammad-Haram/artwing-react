${activeTab === 4 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } 

                        let updated = data.filter((curElement) => {
            return curElement.categories === categories;
        })