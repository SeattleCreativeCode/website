import { useQuery } from '@tanstack/react-query';

async function getEvent(eventId: string) {
    const response = await fetch(`/json/events/${eventId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch event data');
    }
    return response.json();
}

function useEventQuery(eventName: string, eventDate: string) {
    const eventId = `${eventName}/${eventDate}.json`;
    const { data, isLoading, isError, error } = useQuery({ queryKey: ['event', eventId], queryFn: () => getEvent(eventId) });

    return {
        event: data,
        isLoading,
        isError,
        error,
    };
}

export default useEventQuery;