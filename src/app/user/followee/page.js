'use client'

import { useState, useEffect } from 'react';
import UserList from "@/app/components/UerList";

const Followee = () => {
    const [followee, setFollowee] = useState([]);

    useEffect(() => {
        // Mocking search results here, replace with actual API call or data source
        const mockResults = [
        { id: 1, name: 'Tanaka' },
        { id: 2, name: 'Suzuki' },
        { id: 3, name: 'Nakayama' },
        ];
        setFollowee(mockResults);
    }, []);

    return (
        <UserList users={followee}/>
    );
}

export default Followee;
