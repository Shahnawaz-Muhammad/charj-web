const getZipCode = (state) => {
    const zipCodes = {
        alabama: '12345',
        alaska: '67890',
        arizona: '85001',
        arkansas: '72201',
        california: '90001',
        colorado: '80201',
        connecticut: '06101',
        delaware: '19901',
        florida: '32004',
        georgia: '30301',
        hawaii: '96801',
        idaho: '83201',
        illinois: '60601',
        indiana: '46201',
        iowa: '50301',
        kansas: '67201',
        kentucky: '40201',
        louisiana: '70112',
        maine: '03901',
        maryland: '21201',
        massachusetts: '02101',
        michigan: '48201',
        minnesota: '55101',
        mississippi: '39201',
        missouri: '63101',
        montana: '59001',
        nebraska: '68501',
        nevada: '89501',
        newhampshire: '03301',
        newjersey: '07001',
        newmexico: '87501',
        newyork: '10001',
        northcarolina: '27501',
        northdakota: '58501',
        ohio: '44101',
        oklahoma: '73101',
        oregon: '97001',
        pennsylvania: '15001',
        rhodeisland: '02801',
        southcarolina: '29001',
        southdakota: '57001',
        tennessee: '37201',
        texas: '73301',
        utah: '84101',
        vermont: '05001',
        virginia: '22301',
        washington: '98001',
        westvirginia: '24701',
        wisconsin: '53201',
        wyoming: '82001'
    };


    return zipCodes[state] || '';
};


export default getZipCode


