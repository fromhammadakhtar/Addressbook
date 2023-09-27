import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { ApiResponse, ContactType } from '../../utils/types';
import Contacts from '../../components/Contacts/Contacts';
import PaginationComponent from '../../components/Pagination/Pagination';
import SearchComponent from '../../components/Search/Search';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import './Addressbook.scss';
import NoContacts from '../../components/NoContacts/NoContacts';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/Actions/paginationActions';
import { PageState } from '../../store/types';

const Addressbook = () => {
  const url = 'https://randomuser.me/api/?results=100';
  const { data } = useFetch<ApiResponse>(url);
  const [contactList, setContactList] = useState<ContactType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Redux state selectors
  const currentPage = useSelector(
    (state: PageState) => state.pagination.currentPage
  );
  const dispatch = useDispatch();

  // Handle page change
  const handleChangePage = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleSortByName = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    const sortedContacts = [...contactList].sort((a, b) => {
      const nameA = `${a.name.first} ${a.name.last}`;
      const nameB = `${b.name.first} ${b.name.last}`;
      return newSortOrder === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setSortOrder(newSortOrder);
    setContactList(sortedContacts);
  };

  useEffect(() => {
    setContactList(data?.results?.slice(0, 30) || []);
  }, [data]);

  const filteredContacts = contactList.filter((contact) =>
    `${contact.name.first} ${contact.name.last}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const contactsPerPage = 10;
  const startIndex = (currentPage - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;
  const contactsToDisplay = filteredContacts.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredContacts.length / contactsPerPage);

  return (
    <div>
      <div className='flex-container'>
        <Button
          className='sort-button'
          variant='contained'
          color='secondary'
          onClick={handleSortByName}
        >
          Sort by Name{' '}
          {sortOrder === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </Button>
        <SearchComponent onSearch={handleSearch} />
      </div>
      {filteredContacts.length === 0 ? (
        <NoContacts />
      ) : (
        <>
          <Contacts contacts={contactsToDisplay} />
          <PaginationComponent
            currentPage={currentPage}
            pageCount={pageCount}
            onChange={handleChangePage}
          />
        </>
      )}
    </div>
  );
};

export default Addressbook;
