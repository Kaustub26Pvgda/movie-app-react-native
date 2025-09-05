import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import { updateSearchCount } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset: resetMovies
  } = useFetch(() => fetchMovies({
    query: searchTerm
  }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm.trim()) await loadMovies();
      else resetMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  useEffect(() => {
    if (movies?.length > 0 && movies?.[0])
      updateSearchCount(searchTerm, movies[0]);
  }, [movies]);

  return (
    <View className='flex-1 bg-primary'>
      <Image 
        source={images.bg} 
        className='flex-1 absolute w-full z-0'
        resizeMode='cover'
      />
      <FlatList 
        data={movies}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center items-center mt-20'>
              <Image source={icons.logo} className="w-12 h-10 mx-auto" />
            </View>
            <View className='my-5'>
              <SearchBar 
                placeholder='Search movies...'
                value={searchTerm}
                onChangeText={(text: string) => setSearchTerm(text)}
              />
            </View>
            { moviesLoading && (
              <ActivityIndicator 
                size='large' 
                color='#0000ff' 
                className='my-3' 
              />
            ) }
            { moviesError && (
              <Text className='text-red-500 px-5 my-3'>Error: {moviesError.message}</Text>
            ) }
            { !moviesLoading && !moviesError && searchTerm.trim() && movies?.length > 0 && (
              <Text className='text-xl text-white font-bold'>
                Search results for{' '} 
                <Text className='text-accent'>{searchTerm}</Text>
              </Text>
            ) }
          </>
        }
        renderItem={({ item }) => <MovieCard {...item} />}
  keyExtractor={(item, index) => `${item.id}-${index}`}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100
        }}
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View>
              <Text className='text-center text-gray-500'>
                { searchTerm.trim() ? 'No movies found' : 'Start typing to search for movies' }
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  )
}

export default Search