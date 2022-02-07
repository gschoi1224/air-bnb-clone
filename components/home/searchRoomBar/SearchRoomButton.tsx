import React from 'react';
import Link from 'next/link';
import Button from '../../common/Button';
import { SearchIcon } from '../../icons';

const SearchRoomButton: React.FC = () => {
    return (
        <Link href="/room">
            <a>
                <Button icon={<SearchIcon />} color="amaranth" width="90px">
                    검색
                </Button>
            </a>
        </Link>
    );
};

export default SearchRoomButton;
